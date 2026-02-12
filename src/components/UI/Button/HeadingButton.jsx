// Import components
import Icon from '../Icon/Icon';

// import style
import styles from './HeadingButton.module.scss';

function HeadingButton(props) {
  return (
    <button class={styles.Heading__btn} onClick={(e) => props.onClick(e)}>
      <Icon name="person_add"/>
      {props.title}
    </button>
  );
}

export default HeadingButton;
