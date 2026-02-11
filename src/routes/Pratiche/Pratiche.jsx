import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Pratiche.module.scss';

function Pratiche() {
  let root;

  onMount(() => {
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>PRATICHE</h1>
    </div>
  );
}

export default Pratiche;
