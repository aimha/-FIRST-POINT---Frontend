import { onCleanup, onMount } from 'solid-js';

// import style
import styles from './Slider.module.scss'

// import logic
import SliderClass from './Slider.module';
let slider;

function Slider() {

	onMount(() => {
		slider = new SliderClass( styles.Slider, styles.Card, styles.SideNavPrev, styles.SideNavNext, styles.SideNavStart, styles.SideNavEnd);
	});

	onCleanup(() => {
		slider.cleanUp();
	});

	return (
		<>
		<div className={`${styles.SliderContainer}`}>
			<ul class={`${styles.Slider}`}>
        <li className={`${styles.Card}`} data-index='0'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='1'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='2'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='3'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='4'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='5'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='6'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='7'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='8'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
				<li className={`${styles.Card}`} data-index='9'>
          <img src='https://placehold.co/300x480' draggable="false"/>
        </li>
      </ul>

		</div>

		<ul className={`${styles.SideNavContainer}`}>
			<li className={`${styles.SideNavStart}`}>
				Start
			</li>
			<li className={`${styles.SideNavPrev}`}>
				Previous
			</li>
			<li className={`${styles.SideNavNext}`}>
				Next
			</li>
			<li className={`${styles.SideNavEnd}`}>
				End
			</li>
		</ul>

		</>
	)
}

export default Slider;
