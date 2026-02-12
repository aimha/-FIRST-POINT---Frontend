// import style
import styles from './HeadingButton.module.scss';

function HeadingButton(props) {
  return (
    <button class={styles.Heading__btn} onClick={(e) => props.onClick(e)}>
      {props.title}
    </button>
  );
}

export default HeadingButton;
