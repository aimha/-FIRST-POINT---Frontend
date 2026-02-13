import { onMount, createResource, createSignal } from 'solid-js';

// import page components
import Table from '../../components/Table/Table';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import HeadingButton from '../../components/UI/Button/HeadingButton';

// import page components

// import style
import styles from './Pratiche.module.scss';

// get json from endpoint
const fetchDossier = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/f7bfb8a723f2f0a00447a78c5ad594f5/raw/pratiche.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    // Lanciamo l'errore invece di catturarlo qui, così Solid lo vede
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Pratiche() {
  let root;

  // Table configuration
  const columns = [
    { label: "Titolo" }, { label: "Stato" },
    { label: "Data Apertura" }, { label: "Data Chiusura" }
  ];
  const gridConfig = "2fr 1fr 1fr 1fr";

  // resources / signals
  const [dossier] = createResource(fetchDossier);

  onMount(() => {
  })

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Pratiche">
          <HeadingButton title="Nuova Pratica"></HeadingButton>
        </PageHeader>
      </div>

      <Table
        data={dossier()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(contact) => (
          <>
            <div class={`${styles.Table__cell} ${styles['Table__cell--titolo']}`}>
              {contact.titolo}
            </div>
            <div class={`${styles.Table__cell} ${styles['Table__cell--status']}`}>
              {contact.stato}
            </div>
          </>
        )}
      />
    </>
  );
}

export default Pratiche;
