import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Telefonate.module.scss';

// import logic
import TelefonateClass from './Telefonate.module';

function App() {
  let root;
  let hp;

  onMount(() => {
    // initialize telefonate logic
    hp = new TelefonateClass(root, styles);
    hp.init();
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>piero piahduge fh gieubrgi ebrigberigbebgroerbog e</h1>
    </div>
  );
}

export default App;
