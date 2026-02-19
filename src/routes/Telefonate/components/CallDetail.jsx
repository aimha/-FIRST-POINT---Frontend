import { createSignal } from "solid-js";

// import utility functions
import { durationFormatter } from '../../../lib/formatters';

// import page components
import FormButton from '../../../components/UI/Button/FormButton';

// import style
import styles from './CallDetails.module.scss';

function CallDetail(props) {

  return (
    <>
      <div class={styles.Call__heading}>
        <h2>{props.data.oggetto}</h2>
      </div>

      <div class={styles.Call__row}>
        <div class={styles.Call__cell}>
          <span>Data / Ora</span>
          <p>{props.data.started_at}</p>
        </div>
        <div class={styles.Call__cell}>
          <span>Effettuata da</span>
          <p>{props.data.from_number}</p>
        </div>
        <div class={styles.Call__cell}>
          <span>Ricevuta da</span>
          <p>{props.data.to_number}</p>
        </div>
      </div>

      <div class={styles.Call__row}>
        <div class={styles.Call__cell}>
          <span>Durata</span>
          <p>{durationFormatter(props.data.durata_secondi)}</p>
        </div>
        <div class={styles.Call__cell}>
          <span>Status</span>
          <Switch>
            <Match when={props.data.status}>
              <p>Assegnata</p>
            </Match>
            <Match when={!props.data.status}>
              <p>Da assegnare</p>
            </Match>
          </Switch>
        </div>
        <div class={styles.Call__cell}>
          <span>Fatturabile</span>
          <Switch>
            <Match when={props.data.billable}>
              <p>Fatturabile</p>
            </Match>
            <Match when={!props.data.billable}>
              <p>Non Fatturabile</p>
            </Match>
          </Switch>
        </div>
      </div>

      <div class={styles.ModalActions}>
        <FormButton
          title="Annulla"
          type="button"
          icon="close"
          variant="Cancel"
          onClick={props.onClose}>
        </FormButton>
        <FormButton
          title="Archivia Chiamata"
          type="button"
          icon="delete"
          variant="Delete">
        </FormButton>
        <FormButton
          title="Assegna Chiamata"
          type="button"
          icon="edit"
          variant="Submit">
        </FormButton>
      </div>
    </>
  );
}
export default CallDetail;
