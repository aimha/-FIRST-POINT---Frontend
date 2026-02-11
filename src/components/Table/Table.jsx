import { onMount, For } from 'solid-js';

// import style
import styles from './Table.module.scss'

function Table(props) {

  onMount(() => {
  });

  return (
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
      <For each={props.payload}>
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
  )
}

export default Table;
