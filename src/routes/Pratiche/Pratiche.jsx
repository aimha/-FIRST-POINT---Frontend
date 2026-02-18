import { createResource, createSignal, Switch } from 'solid-js';

// import context
import { useUi } from "../../data/context/UiContext";

// import page components
import AddDossierForm from './components/AddDossierForm';
import Cell from '../../components/Table/components/Cell';
import DossierDetail from './components/DossierDetail';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import Icon from '../../components/UI/Icon/Icon';
import Modal from '../../components/UI/Modal/Modal';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Table from '../../components/Table/Table';

// import style
import styles from './Pratiche.module.scss';

// get json from endpoint
const fetchDossier = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/49b07adc740df828aa07cccde287f0ba/raw/pratiche.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Pratiche() {
  // handle toast notification
  const { showToast } = useUi();

  // root element in the page
  let root;

  // Table configuration
  const columns = [
    { label: "Titolo" }, { label: "Descrizione" }, { label: "Data Apertura / Chiusura" }, { label: "Stato" }
  ];
  const gridConfig = "calc((100% - 24rem) / 2) calc((100% - 24rem) / 2) 16rem 8rem";

  // resources / signals
  const [dossier] = createResource(fetchDossier);
  const [selectedDossier, setSelectedDossier] = createSignal(null);

  const [modalMode, setModalMode] = createSignal("add");
  const [showModal, setShowModal] = createSignal(false);

  // handle add operator modal
  const openAddModal = () => {
    setModalMode("add");
    setSelectedDossier(null);
    setShowModal(true);
  };

  // handle contact details modal
  const openDetailModal = (dossier) => {
    setModalMode("detail");
    setSelectedDossier(dossier);
    setShowModal(true);
  }

  // handle contact delete
  const deleteDossier = async (id) => {
    console.log(`%c ID: ${id} - CANCELLATO `);
    setShowModal(false);
    showToast("Pratica eliminata con successo");
  };

  // handle save for edited contact data
  const handleSave = (id) => {
    console.log(`%c ID: ${id} - MODIFICATO`);
    showToast("Modifiche salvate con successo");
  };

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Pratiche">
          <HeadingButton title="Nuova Pratica" onClick={openAddModal}></HeadingButton>
        </PageHeader>
      </div>

      <Table
        data={dossier()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(file) => {
          const isAttiva = file.stato.toLowerCase() === 'attiva';
          const statusIcon = isAttiva ? 'check_circle' : 'lock';
          const statusClass = isAttiva ? styles['Table__cell--statusActive'] : styles['Table__cell--statusClosed'];

          return (
            <>
              <Cell class={styles['Table__cell--title']}>
                {file.titolo}
              </Cell>
              <Cell class={styles['Table__cell--desc']}>
                <span class={styles.Truncate}>
                  {file.descrizione}
                </span>
              </Cell>
              <Cell class={styles['Table__cell--dates']}>
                {file.data_apertura} -
                {file.data_chiusura && file.data_chiusura !== "null" && file.data_chiusura.trim() !== ""
                  ? file.data_chiusura
                  : <span>[In corso...]</span>
                }
              </Cell>
              <Cell class={`${styles['Table__cell--status']} ${statusClass}`}>
                <Icon name={statusIcon} />
                {file.stato}
              </Cell>
            </>
          )
        }}
        onRowClick={openDetailModal}
      />

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title={modalMode() === "add" ? "Aggiungi Pratica" : "Dettaglio Pratica"}>
        <Switch>
          <Match when={modalMode() === "add"}>
            <AddDossierForm
              onClose={() => setShowModal(false)}
              onSuccess={() => {
                setShowModal(false);
                showToast("Pratica inserita con successo");
              }}
            />
          </Match>
          <Match when={modalMode() === "detail"}>
            <DossierDetail
              data={selectedDossier()}
              onClose={() => setShowModal(false)}
              onDelete={(id) => deleteDossier(id)}
              onSave={(id) => handleSave(id)}
            />
          </Match>
        </Switch>
      </Modal>
    </>
  );
}

export default Pratiche;
