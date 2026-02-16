// import page components
import FormGroup from '../../../components/UI/Input/FormGroup';
import FormButton from '../../../components/UI/Button/FormButton';
import TextArea from '../../../components/UI/Input/TextArea';

// import style
import styles from './AddContactForm.module.scss';

function AddContactForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // finta richiesta POST
    console.log("--- Finta Richiesta POST verso NestJS ---");
    console.log("Endpoint: POST /api/contacts");
    console.log("Payload:", data);
    console.log("------------------------------------------");

    props.onClose();
  };

  return (
    <>
      <form class={styles.ModalForm} onSubmit={handleSubmit}>
        <div class={styles.ModalRow}>
          <FormGroup label="Nome">
            <input type="text" name="nome" placeholder="Es: Mario" />
          </FormGroup>
          <FormGroup label="Cognome">
            <input type="text" name="cognome" placeholder="Es: Rossi" />
          </FormGroup>
        </div>
        <div class={styles.ModalRow}>
          <FormGroup label="Azienda">
            <input type="text" name="azienda" placeholder="Es: Studio Legale Rossi" />
          </FormGroup>
          <FormGroup label="E-Mail">
            <input type="text" name="email" placeholder="mario.rossi@email.com" />
          </FormGroup>
        </div>
        <div class={styles.ModalRow}>
          <FormGroup label="Cellulare">
            <input type="text" name="cellulare" placeholder="+390000000000" />
          </FormGroup>
          <FormGroup label="Cellulare 2">
            <input type="text" name="cellulare2" placeholder="+390000000000" />
          </FormGroup>
        </div>
        <div class={styles.ModalRow}>
          <FormGroup label="Casa">
            <input type="text" name="casa" placeholder="02345678" />
          </FormGroup>
          <FormGroup label="Ufficio">
            <input type="text" name="ufficio" placeholder="02345678" />
          </FormGroup>
        </div>
        <div class={styles.ModalRow}>
          <FormGroup label="Ufficio 2">
            <input type="text" name="ufficio2" placeholder="02345678" />
          </FormGroup>
          <FormGroup label="fax">
            <input type="text" name="fax" placeholder="02345678" />
          </FormGroup>
        </div>
        <TextArea label="Note" id="note" name="note" row="6" placeholder="Aggiungi dettagli contatto...">
        </TextArea>

        <div class={styles.ModalActions}>
          <FormButton
            title="Annulla"
            type="button"
            icon="close"
            variant="Secondary"
            onClick={props.onClose}>
          </FormButton>
          <FormButton
            title="Salva Contatto"
            type="submit"
            icon="check"
            variant="Primary">
          </FormButton>
        </div>
      </form>
    </>
  );
}

export default AddContactForm;
