import { onMount, For, createResource, createSignal, Show } from 'solid-js';
import { Portal } from "solid-js/web";

// import page components

// import style
import styles from './Contatti.module.scss';

// import logic
import ContattiClass from './Contatti.module';

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
  let hp;

  const handleAddContact = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  onMount(() => {
    // initialize telefonate logic
    hp = new ContattiClass(root, styles);
    hp.init();
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
        <ul class={styles.Table}>
          <li class={styles.Table__heading}>
            <div>ID</div>
            <div>Nome / Azienda</div>
            <div>Tag</div>
            <div>P.IVA</div>
            <div>E-mail</div>
            <div>Telefono</div>
            <div>Pratiche</div>
          </li>
          <For each={contacts()}>
            {(contact) => (
              <li class={styles.Table__row}>
                <div class={`${styles.Table__cell} ${styles['Table__cell--id']}`}>
                  {contact.id}
                </div>
                <div class={`${styles.Table__cell} ${styles['Table__cell--name']}`}>
                  {contact.nome}
                </div>
                <div class={`${styles.Table__cell} ${styles['Table__cell--tag']}`}>
                  <For each={contact.tag}>
                    {(tag) => (
                      <span>{tag}</span>
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
              </li>
            )}
          </For>
        </ul>
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
