import { onMount, createResource, createSignal, Show } from 'solid-js';

// import page components
import Table from '../../components/Table/Table';
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
  const [contacts] = createResource(fetchContacts);
  const [showModal, setShowModal] = createSignal(false);

  let root;

  const handleAddContact = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  onMount(() => {
  })

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Contatti">
          <HeadingButton title="Nuovo Contatto" onClick={handleAddContact}></HeadingButton>
        </PageHeader>

        <Table payload={contacts()} />
      </div>

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title="Aggiungi nuovo contatto">
        <AddContactForm />
      </Modal>
    </>
  );
}

export default Contatti;
