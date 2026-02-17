// import page components
import FormGroup from '../../../components/UI/Input/FormGroup';
import FormButton from '../../../components/UI/Button/FormButton';
import TextArea from '../../../components/UI/Input/TextArea';

// import style
import styles from './AddOperatorForm.module.scss';

function AddOperatorForm(props) {
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
          <FormGroup label="Email">
            <input type="text" name="email" placeholder="Es: mario.rossi@email.com" />
          </FormGroup>
          <FormGroup label="Ruolo">
            <input type="text" name="ruolo" placeholder="Es: Associato" />
          </FormGroup>
        </div>
        <div class={styles.ModalRow}>
          <FormGroup label="Interno">
            <input type="number" name="interno" placeholder="Es: 001" />
          </FormGroup>
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
            title="Salva Operatore"
            type="submit"
            icon="check"
            variant="Submit">
          </FormButton>
        </div>
      </form>
    </>
  );
}

export default AddOperatorForm;
