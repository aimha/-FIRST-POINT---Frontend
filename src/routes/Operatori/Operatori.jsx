import { createResource, createSignal, Switch } from 'solid-js';

// import context
import { useUi } from "../../data/context/UiContext";

// import page components
import AddOperatorForm from './components/AddOperatorForm';
import Cell from '../../components/Table/components/Cell';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import Modal from '../../components/UI/Modal/Modal';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Table from '../../components/Table/Table';

// import style
import styles from './Operatori.module.scss';

// get json from endpoint
const fetchOperators = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/4ac689455e13cb2333f69b6c5b7b6f6c/raw/operatori.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Operatori() {
  // handle toast notification
  const { showToast } = useUi();

  // root element in the page
  let root;

  // Table configuration
  const columns = [
    { label: "Nome Cognome" }, { label: "Email" }, { label: "Roulo" }, { label: "Interno" }
  ];
  const gridConfig = "1fr 1fr 1fr 8rem";

  // resources / signals
  const [operators] = createResource(fetchOperators);
  const [selectedOperator, setSelectedOperator] = createSignal(null);

  const [modalMode, setModalMode] = createSignal("add");
  const [showModal, setShowModal] = createSignal(false);

  // handle add operator modal
  const openAddModal = () => {
    setModalMode("add");
    setSelectedOperator(null);
    setShowModal(true);
  };

  // handle contact details modal
  const openDetailModal = (contact) => {
    setModalMode("detail");
    setSelectedContact(contact);
    setShowModal(true);
  }

  // handle contact delete
  const deleteContact = async (id) => {
    console.log(`%c ID: ${id} - CANCELLATO `);
    setShowModal(false);
    showToast("Contatto eliminato con successo");
  };

  // handle save for edited contact data
  const handleSave = (id) => {
    console.log(`%c ID: ${id} - MODIFICATO`);
    showToast("Modifiche salvate con successo");
  };

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Operatori">
          <HeadingButton title="Nuovo Operatore" onClick={openAddModal}></HeadingButton>
        </PageHeader>
      </div>

      <Table
        data={operators()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(operator) => {
          return (
            <>
              <Cell class={styles['Table__cell--name']}>
                {operator.nome} {operator.cognome}
              </Cell>
              <Cell class={styles['Table__cell--email']}>
                {operator.email}
              </Cell>
              <Cell class={styles['Table__cell--role']}>
                {operator.ruolo}
              </Cell>
              <Cell class={styles['Table__cell--intern']}>
                {operator.interno}
              </Cell>
            </>
          )
        }}
      />

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title={modalMode() === "add" ? "Aggiungi Operatore" : "Dettaglio Operatore"}>
        <Switch>
          <Match when={modalMode() === "add"}>
            <AddOperatorForm
              onClose={() => setShowModal(false)}
              onSuccess={() => {
                setShowModal(false);
                showToast("Contatto inserito con successo");
              }}
            />
          </Match>
          <Match when={modalMode() === "detail"}>
          </Match>
        </Switch>
      </Modal>
    </>
  );
}

export default Operatori;
