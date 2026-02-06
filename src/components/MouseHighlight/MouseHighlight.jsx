import { onMount } from 'solid-js';

// import style
import styles from './MouseHighlight.module.scss'

// import logic
import MouseHighlightClass from './MouseHighlight.module';

function MouseHighlight() {

  onMount(() => {
    // initialize grid logic
    const mouse = new MouseHighlightClass(styles.MouseContainer, styles.MouseHighlight);
    mouse.init();
  });

  return (
    <div className={styles.MouseContainer}>
      <div className={styles.MouseHighlight}></div>
    </div>
  )
}

export default MouseHighlight;
