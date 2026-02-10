import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Contatti.module.scss';

// import logic
import ContattiClass from './Contatti.module';

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
    </div>
  );
}

export default Contatti;
