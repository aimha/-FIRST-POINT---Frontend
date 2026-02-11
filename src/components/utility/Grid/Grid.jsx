import { onMount } from 'solid-js';

// import style
import styles from './Grid.module.scss'

function Grid() {
  let root;

  onMount(() => {
  });

  return (
    <div ref={root} className={`${styles.Hidden}`}>
      <div class={ styles.TypoGridY }></div>
      <div class={ styles.TypoGridX }></div>
    </div>
  )
}

export default Grid;
