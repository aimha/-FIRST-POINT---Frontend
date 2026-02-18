// import page components
import FormGroup from '../../../components/UI/Input/FormGroup';
import FormButton from '../../../components/UI/Button/FormButton';
import TextArea from '../../../components/UI/Input/TextArea';

// import style
import styles from './AddDossierForm.module.scss';

function AddDossierForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // finta richiesta POST
    console.log("--- Finta Richiesta POST verso NestJS ---");
    console.log("Endpoint: POST /api/contacts");
    console.log("Payload:", data);
    console.log("------------------------------------------");

    if (props.onSuccess) {
      props.onSuccess();
    }

  };

  return (
    <>
      <form class={styles.ModalForm} onSubmit={handleSubmit}>
        <FormGroup label="Titolo">
          <input type="text" name="title" placeholder="Es: Pratica generica per..." />
        </FormGroup>
        <TextArea label="Descrizione" id="desc" name="desc" row="8" placeholder="Aggiungi dettagli pratica...">
        </TextArea>
        <FormGroup label="Data Apertura">
          <input
            type="date"
            name="data_apertura"
            class={styles.InputDate}
          />
        </FormGroup>
        <div class={styles.ModalRow}>
          <FormGroup label="Nome Referente">
            <input type="text" name="ref" placeholder="Mario Rossi" />
          </FormGroup>
          <FormGroup label="Numero Referente">
            <input type="text" name="phone" placeholder="+3900000000" />
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
            title="Salva Pratica"
            type="submit"
            icon="check"
            variant="Submit">
          </FormButton>
        </div>
      </form>
    </>
  );
}

export default AddDossierForm;
