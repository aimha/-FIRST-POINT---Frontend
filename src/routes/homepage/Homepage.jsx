import { onMount } from 'solid-js';

// import utility components
import Grid from '../../components/utility/Grid/Grid';

// import page components
import Sidebar from '../../components/page/sidebar/Sidebar';

// import style
import styles from './Homepage.module.scss';

// import logic
import HomepageClass from './Homepage.module';

// import state management store
import stateManagement from "../../data/stores/Store";

function App() {
  const { state } = stateManagement;
  let root;
  let hp;
  
  onMount(() => {
    // initialize homepage logic
    hp = new HomepageClass(root, styles);
    hp.init();
  })

  return (
    <>
      {/* UTILITY */}
      <Grid />

      {/* PAGE CONTENT */}
      <div ref={root} class={`${styles.Container}`}>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
