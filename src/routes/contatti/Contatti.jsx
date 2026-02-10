import { onMount, For } from 'solid-js';

// import page components

// import style
import styles from './Contatti.module.scss';

// import logic
import ContattiClass from './Contatti.module';

// import Store
import { contacts } from "../../data/stores/Store";

function Contatti() {
  let root;
  let hp;

  const handleAddContact = (e) => {
    e.preventDefault();
    console.log("Apertura modale nuovo contatto");
  };

  onMount(() => {
    // initialize telefonate logic
    hp = new ContattiClass(root, styles);
    hp.init();
  })

  return (
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
        <For each={contacts}>
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
                {contact.telefono}
              </div>
              <div class={`${styles.Table__cell} ${styles['Table__cell--dossier']}`}>
                {contact.pratiche}
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default Contatti;
