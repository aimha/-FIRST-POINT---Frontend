import { onMount } from 'solid-js';

// import style
import styles from "./Table.module.scss";

function TableBis(props) {

  onMount(() => {
  });

  return (
    <ul class={styles.Table} >
      {/* Header dinamico */}
      <li class={styles.Table__heading} style={{ "grid-template-columns": props.gridConfig }}>
        <For each={props.columns}>
          {(col) => <div>{col.label}</div>}
        </For>
      </li>

      {/* Righe dinamiche tramite children */}
      <For each={props.data}>
        {(item) => (
          <li class={styles.Table__row} style={{ "grid-template-columns": props.gridConfig }}>
            {props.renderRow(item)}
          </li>
        )}
      </For>
    </ul>
  );
}
export default TableBis;
