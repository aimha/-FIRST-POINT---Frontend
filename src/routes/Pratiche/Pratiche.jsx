import { onMount, createResource, createSignal } from 'solid-js';

// import page components
import Table from '../../components/Table/Table';
import Cell from '../../components/Table/components/Cell';
import Icon from '../../components/UI/Icon/Icon';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import Modal from '../../components/UI/Modal/Modal';
import AddDossierForm from './components/AddDossierForm';

// import page components

// import style
import styles from './Pratiche.module.scss';

// get json from endpoint
const fetchDossier = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/f7bfb8a723f2f0a00447a78c5ad594f5/raw/pratiche.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Pratiche() {
  let root;

  // Table configuration
  const columns = [
    { label: "Titolo" }, { label: "Descrizione" }, { label: "Data Apertura / Chiusura" }, { label: "Stato" }
  ];
  const gridConfig = "calc((100% - 24rem) / 2) calc((100% - 24rem) / 2) 16rem 8rem";

  // resources / signals
  const [dossier] = createResource(fetchDossier);
  const [showModal, setShowModal] = createSignal(false);

  // handle modal
  const handleAddContact = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  onMount(() => {
  })

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Pratiche">
          <HeadingButton title="Nuova Pratica" onClick={handleAddContact}></HeadingButton>
        </PageHeader>
      </div>

      <Table
        data={dossier()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(contact) => {
          const isAttiva = contact.stato.toLowerCase() === 'attiva';
          const statusIcon = isAttiva ? 'check_circle' : 'lock';
          const statusClass = isAttiva ? styles['Table__cell--statusActive'] : styles['Table__cell--statusClosed'];

          return (
            <>
              <Cell class={styles['Table__cell--title']}>
                {contact.titolo}
              </Cell>
              <Cell class={styles['Table__cell--desc']}>
                <span class={styles.Truncate}>
                  {contact.descrizione}
                </span>
              </Cell>
              <Cell class={styles['Table__cell--dates']}>
                {contact.data_apertura} - 
                {contact.data_chiusura && contact.data_chiusura !== "null" && contact.data_chiusura.trim() !== ""
                  ? contact.data_chiusura
                  : <span>[In corso...]</span>
                }
              </Cell>
              <Cell class={`${styles['Table__cell--status']} ${statusClass}`}>
                <Icon name={statusIcon} />
                {contact.stato}
              </Cell>
            </>
          )
        }}
      />

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title="Aggiungi nuova pratica">
        <AddDossierForm onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
}

export default Pratiche;
