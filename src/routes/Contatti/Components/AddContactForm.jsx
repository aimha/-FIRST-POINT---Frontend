// import page components
import FormGroup from '../../../components/UI/Input/FormGroup';

// import style
import styles from './AddContactForm.module.scss';

function AddContactForm(props) {
  return (
    <>
      <form class={styles.ModalForm}>
        <FormGroup label="Nome / Azienda">
          <input type="text" placeholder="Es: Studio Legale Rossi" />
        </FormGroup>
        <FormGroup label="Partita IVA">
          <input type="text" placeholder="IT00000000000" />
        </FormGroup>
        <FormGroup label="E-Mail">
          <input type="text" placeholder="mario.rossi@email.com" />
        </FormGroup>
        <FormGroup label="Telefono">
          <input type="text" placeholder="+390000000000" />
        </FormGroup>

      </form>
    </>
  );
}

export default AddContactForm;
