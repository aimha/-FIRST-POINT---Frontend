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

  onMount(() => {
    // initialize telefonate logic
    hp = new ContattiClass(root, styles);
    hp.init();
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>CONTATTI</h1>
      <ul class={styles.Table}>
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
                {contact.tag}
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
