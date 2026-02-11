// import style
import styles from './FormGroup.module.scss';

function FormGroup(props) {
  return (
    <div class={styles.FormGroup}>
      <label class={styles.Label}>{props.label}</label>
      {props.children}
      {props.error && <span class={styles.Error}>{props.error}</span>}
    </div>
  );
}

export default FormGroup;
