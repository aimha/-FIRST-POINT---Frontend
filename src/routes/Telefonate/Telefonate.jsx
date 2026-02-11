import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Telefonate.module.scss';

function Telefonate() {
  let root;

  onMount(() => {
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>TELEFONATE</h1>
    </div>
  );
}

export default Telefonate;
