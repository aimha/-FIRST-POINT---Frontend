// import style
import styles from './TextArea.module.scss';

function TextArea(props) {
  return (
    <div class={styles.TextArea}>
      <label class={styles.Label}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name || "note"}
        placeholder={props.placeholder || "Inserici testo..."}
        rows={props.row || 3}
        onInput={props.onInput}
        class={styles.TextArea}
      />
        {props.value || ""}
    </div>
  );
}

export default TextArea;
