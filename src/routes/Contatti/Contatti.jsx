import { onMount, createResource, createSignal } from 'solid-js';

// import page components
import Table from '../../components/Table/Table';
import Tag from '../../components/UI/Badge/Tag';
import Modal from '../../components/UI/Modal/Modal';
import AddContactForm from './Components/AddContactForm';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import PageHeader from '../../components/UI/PageHeader/PageHeader';

// import style
import styles from './Contatti.module.scss';

// get json from endpoint
const fetchContacts = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/e18ffbc06c63d64a2d44e48a6928f5e8/raw/fa50dd8acdd161b3e01bd9070aff430d89699341/contatti.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    // Lanciamo l'errore invece di catturarlo qui, così Solid lo vede
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Contatti() {
  let root;

  // Table configuration
  const columns = [
    { label: "ID" }, { label: "Nome" }, { label: "Tag" },
    { label: "P.IVA" }, { label: "E-mail" }, { label: "Telefono" }, { label: "Pratiche" }
  ];
  const gridConfig = "var.$spc-4xl 1.5fr 1fr .5fr 1fr 1fr var.$spc-4xl";

  // resources / signals
  const [contacts] = createResource(fetchContacts);
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
        <PageHeader title="Contatti">
          <HeadingButton title="Nuovo Contatto" onClick={handleAddContact}></HeadingButton>
        </PageHeader>

        <Table
          data={contacts()}
          columns={columns}
          gridConfig={gridConfig}
          renderRow={(contact) => (
            <>
              <div class={`${styles.Table__cell} ${styles['Table__cell--id']}`}>
                {contact.id}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--name']}`}>
                {contact.nome}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--tag']}`}>
                <For each={contact.tag}>
                  {(tag) => (
                    <Tag tag={tag}></Tag>
                  )}
                </For>
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--piva']}`}>
                {contact.piva}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--email']}`}>
                {contact.email}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--phone']}`}>
                <For each={contact.telefono}>
                  {(num) => (
                    <span>{num}</span>
                  )}
                </For>
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--dossier']}`}>
                {contact.pratiche}
              </div>
            </>
          )}
        />
      </div>

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title="Aggiungi nuovo contatto">
        <AddContactForm onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
}

export default Contatti;
