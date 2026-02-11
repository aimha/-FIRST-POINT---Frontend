import { Show } from "solid-js";
import { Portal } from "solid-js/web";

// import style
import styles from "./Modal.module.scss";

export default function Modal(props) {
  return (
  <Portal>
    <Show when={props.isOpen}>
      <div class={styles.ModalOverlay} onClick={() => props.onClose()}>
        <div class={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
          <div class={styles.ModalHeader}>
            <h2>{props.title}</h2>
            <button onClick={() => props.onClose()}>&times;</button>
          </div>
          <main>
            {props.children}
          </main>
        </div>
      </div>
    </Show>
  </Portal>
  );
}
