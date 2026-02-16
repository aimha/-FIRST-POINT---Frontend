import { onMount, createResource, createSignal } from 'solid-js';

// import page components
import Table from '../../components/Table/Table';
import Cell from '../../components/Table/components/Cell';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import Modal from '../../components/UI/Modal/Modal';
import AddOperatorForm from './components/AddOperatorForm';

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
  let root;
  
  // Table configuration
  const columns = [
    { label: "Nome Cognome" }, { label: "Email" }, { label: "Roulo" }, { label: "interno" }
  ];
  const gridConfig = "1fr 1fr 1fr 8rem";

  // resources / signals
  const [operators] = createResource(fetchOperators);
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
        <PageHeader title="Operatori">
          <HeadingButton title="Nuova Operatore" onClick={handleAddContact}></HeadingButton>
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
        title="Aggiungi nuovo operatore">
        <AddOperatorForm onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
}

export default Operatori;
