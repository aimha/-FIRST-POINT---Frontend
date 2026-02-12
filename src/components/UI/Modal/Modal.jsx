import { Show } from "solid-js";
import { Portal } from "solid-js/web";

// Import components
import Icon from '../Icon/Icon';

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
            <button class={styles.ModalButton} onClick={() => props.onClose()}>
              <Icon name="close"/> 
            </button>
          </div>
          <main class={styles.ModalBody}>
            {props.children}
          </main>
        </div>
      </div>
    </Show>
  </Portal>
  );
}
