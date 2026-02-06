import { onMount } from 'solid-js';

// import style
import styles from './Marquee.module.scss'

// import logic
import MarqueeClass from './Marquee.module';

function Marquee() {

  onMount(() => {
    // initialize grid logic
    const marquee = new MarqueeClass();
    marquee.init();
  });

  return (
    <>
    <div className={styles.Wrapper}>
      <ul className={styles.Track}>
        <li>
          lorem ipsum
        </li>
        <li>
          dolor sit amet
        </li>
        <li>
        consectetur adipisicing elit
        </li>
        <li>
        Ipsum possimus aspernatur
        </li>
        <li>
        nesciunt pariatur doloribus
        </li>
        <li>
          eligendi numquam corrupti
        </li>
        <li>
          lorem ipsum
        </li>
        <li>
          dolor sit amet
        </li>
        <li>
        consectetur adipisicing elit
        </li>
        <li>
        Ipsum possimus aspernatur
        </li>
        <li>
        nesciunt pariatur doloribus
        </li>
        <li>
          eligendi numquam corrupti
        </li>
      </ul>
    </div>
    </>
  )
}

export default Marquee;
