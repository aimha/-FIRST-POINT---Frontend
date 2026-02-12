// import style
import styles from './Tag.module.scss';

function Tag(props) {
  return (
    <span class={styles.Tag}>{props.tag}</span>
  );
}

export default Tag;
