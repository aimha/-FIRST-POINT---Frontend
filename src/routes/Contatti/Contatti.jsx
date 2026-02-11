import { onMount, createResource, createSignal, Show } from 'solid-js';
import { Portal } from "solid-js/web";

// import page components
import Table from '../../components/Table/Table';

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
        <div class={styles.Heading}>
          <h1>Contatti</h1>
          <button class={styles.Heading__btn} onClick={handleAddContact}>
            + Nuovo Contatto
          </button>
        </div>

        <Table payload={contacts()} />
      </div>

      <Portal>
        <Show when={showModal()}>
          <div class={styles.ModalOverlay} onClick={closeModal}>
            <div class={styles.ModalContent} onClick={(e) => e.stopPropagation()}>

              <div class={styles.ModalHeader}>
                <h2>Aggiungi Nuovo Contatto</h2>
                <button onClick={closeModal}>&times;</button>
              </div>

              <form class={styles.ModalForm}>
                <div class={styles.FormGroup}>
                  <label>Nome / Azienda</label>
                  <input type="text" placeholder="Es: Studio Legale Rossi" />
                </div>

                <div class={styles.FormGroup}>
                  <label>Partita IVA</label>
                  <input type="text" placeholder="IT00000000000" />
                </div>

                <div class={styles.FormGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="esempio@mail.it" />
                </div>

                <div class={styles.FormGroup}>
                  <label>Tag (separati da virgola)</label>
                  <input type="text" placeholder="Cliente, Estero, ecc..." />
                </div>

                <div class={styles.FormGroup}>
                  <label>Telefoni (separati da virgola)</label>
                  <input type="text" placeholder="+39..., +39..." />
                </div>

                <div class={styles.ModalActions}>
                  <button type="button" onClick={closeModal}>Annulla</button>
                  <button type="submit">Salva Contatto</button>
                </div>
              </form>

            </div>
          </div>
        </Show>
      </Portal>
    </>
  );
}

export default Contatti;
