import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Operatori.module.scss';

function Operatori() {
  let root;

  onMount(() => {
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>OPERATORI</h1>
    </div>
  );
}

export default Operatori;
