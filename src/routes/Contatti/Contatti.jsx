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
  const GIST_URL = "https://gist.githubusercontent.com/aimha/e18ffbc06c63d64a2d44e48a6928f5e8/raw/contatti.json";

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
    { label: "Nome" }, { label: "Azienda" },
    { label: "E-mail" }, { label: "Telefono" }, { label: "Pratiche" }
  ];
  const gridConfig = "1fr 1fr 1fr 1fr 6rem";

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
          renderRow={(contact) => {
            const optionalFields = ["cellulare2", "casa", "ufficio", "ufficio2", "fax"];
            const extraCount = optionalFields.filter(field => contact[field] && contact[field].trim() !== "" && contact[field] !== "-").length;

            return (
            <>
              <div class={`${styles.Table__cell} ${styles['Table__cell--name']}`}>
                {contact.nome} {contact.cognome}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--company']}`}>
                {contact.azienda}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--email']}`}>
                {contact.email}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--phone']}`}>
                {contact.cellulare} [+{extraCount}]
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--dossier']}`}>
                {Math.floor(Math.random() * 10) + 1}
              </div>
            </>
            )}}
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
