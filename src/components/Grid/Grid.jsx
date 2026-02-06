import { onMount } from 'solid-js';

// import style
import styles from './Grid.module.scss'

// import logic
import GridClass from './Grid.module';

function Grid() {
  let root;
  let grd;

  onMount(() => {
    // initialize grid logic
    grd = new GridClass(root, styles);
    grd.init();
  });

  return (
    <div ref={root} className={`${styles.Hidden}`}>
      <div class={ styles.TypoGridY }></div>
      <div class={ styles.TypoGridX }></div>
    </div>
  )
}

export default Grid;
