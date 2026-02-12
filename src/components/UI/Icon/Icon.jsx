// import style
import styles from './Icon.module.scss';

function Icon(props) {
  return (
    <span
      class={`material-symbols-outlined ${styles.Icon}`}
    >
      {props.name}
    </span>
  );
}

export default Icon;
