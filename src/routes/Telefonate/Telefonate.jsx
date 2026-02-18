import { createResource, createSignal, Switch } from 'solid-js';

// import context
import { useUi } from "../../data/context/UiContext";

// import page components
import Cell from '../../components/Table/components/Cell';
import Modal from '../../components/UI/Modal/Modal';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Table from '../../components/Table/Table';

// import style
import styles from './Telefonate.module.scss';

// get json from endpoint
const fetchCalls = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/5c1eba2e01b630827c6027fbad12d3c8/raw/telefonate.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Telefonate() {
  // handle toast notification
  const { showToast } = useUi();

  // root element in the page
  let root;

  // Table configuration
  const columns = [
    { label: "Oggetto" }
  ];
  const gridConfig = "1fr";

  // resources / signals
  const [calls] = createResource(fetchCalls);
  const [selectedCall, setSelectedCall] = createSignal(null);

  const [modalMode, setModalMode] = createSignal("add");
  const [showModal, setShowModal] = createSignal(false);

  return (
    <div ref={root} class={`${styles.Container}`}>
      <PageHeader title="Telefonate">
      </PageHeader>
      
      <Table
        data={calls()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(call) => {
          return (
            <>
              <Cell class={styles['Table__cell--name']}>
                {call.oggetto}
              </Cell>
            </>
          )
        }}
      />

    </div>
  );
}

export default Telefonate;
