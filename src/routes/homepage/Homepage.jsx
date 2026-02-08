import { onMount } from 'solid-js';

// import page components

// import style
import styles from './Homepage.module.scss';

// import logic
import HomepageClass from './Homepage.module';

function App() {
  let root;
  let hp;

  onMount(() => {
    // initialize homepage logic
    hp = new HomepageClass(root, styles);
    hp.init();
  })

  return (
    <div ref={root} class={`${styles.Container}`}>
      <h1>piero piahduge fh gieubrgi ebrigberigbebgroerbog e</h1>
    </div>
  );
}

export default App;
