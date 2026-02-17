// import page components
import FormButton from '../../../components/UI/Button/FormButton';

// import style
import styles from './ContactDetails.module.scss';

function ContactDetail(props) {
  return (
    <>
      <div class={styles.Contact__heading}>
        <h2>{props.data?.nome} {props.data?.cognome}</h2>
        <div class={styles['Contact__heading--subtitle']}>
          <span>{props.data?.azienda || <i>-- campo vuoto --</i>}</span>
          <span>{props.data?.dipartimento || <i>-- campo vuoto --</i>}</span>
        </div>
      </div >

      <div class={styles.Contact__row}>
        <div class={styles.Contact__cell}>
          <span>Email</span>
          <p>{props.data.email || "---"}</p>
        </div>
        <div class={styles.Contact__cell}>
          <span>Cellulare</span>
          <p>{props.data.cellulare || "---"}</p>
        </div>
        <div class={styles.Contact__cell}>
          <span>Cellulare 2</span>
          <p>{props.data.cellulare2 || "---"}</p>
        </div>
        <div class={styles.Contact__cell}>
          <span>Casa</span>
          <p>{props.data.casa || "---"}</p>
        </div>
      </div>
      <div class={styles.Contact__row}>
        <div class={styles.Contact__cell}>
          <span>Ufficio</span>
          <p>{props.data.ufficio || "---"}</p>
        </div>
        <div class={styles.Contact__cell}>
          <span>Ufficio 2</span>
          <p>{props.data.ufficio2 || "---"}</p>
        </div>
        <div class={styles.Contact__cell}>
          <span>Fax</span>
          <p>{props.data.fax || "---"}</p>
        </div>
      </div>
      <div class={styles.Contact__row}>
        <div class={styles.Contact__cell}>
          <span>Note</span>
          <p>{props.data.altro || "---"}</p>
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
          title="Elimina Contatto"
          type="button"
          icon="delete"
          variant="Delete">
        </FormButton>
        <FormButton
          title="Modifica Contatto"
          type="button"
          icon="edit"
          variant="Submit">
        </FormButton>
      </div>
    </>
  );
}
export default ContactDetail;
