import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Pratiche.module.scss';

// import logic
import PraticheClass from './Pratiche.module';

function Pratiche() {
  let root;
  let hp;

  onMount(() => {
    // initialize telefonate logic
    hp = new PraticheClass(root, styles);
    hp.init();
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>PRATICHE</h1>
    </div>
  );
}

export default Pratiche;
