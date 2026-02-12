// import page components
import FormGroup from '../../../components/UI/Input/FormGroup';
import FormButton from '../../../components/UI/Button/FormButton';

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
        <FormGroup label="Nome">
          <input type="text" name="name" placeholder="Es: Studio Legale Rossi" />
        </FormGroup>
        <FormGroup label="Partita IVA">
          <input type="text" name="piva" placeholder="IT00000000000" />
        </FormGroup>
        <FormGroup label="E-Mail">
          <input type="text" name="email" placeholder="mario.rossi@email.com" />
        </FormGroup>
        <FormGroup label="Telefono">
          <input type="text" name="phone" placeholder="+390000000000" />
        </FormGroup>
        <FormGroup label="Tags (separati da una virgola)">
          <input type="text" name="tags" placeholder="Tag" />
        </FormGroup>

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
