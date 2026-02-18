import { createSignal } from "solid-js";

// import page components
import FormButton from '../../../components/UI/Button/FormButton';

// import style
import styles from './OperatorDetail.module.scss';

function OperatorDetail(props) {
  // editing signal
  const [isEditing, setIsEditing] = createSignal(false);

  // pass props to editing form
  const [formData, setFormData] = createSignal({ ...props.data });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData(), [name]: value });
  };

  const onSaveInternal = () => {
    props.onSave(props.data.id);
    setIsEditing(false);
  };

  return (
    <>
      <div class={styles.Operator__heading}>
        <Switch>
          <Match when={!isEditing()}>
            <h2>{props.data?.nome} {props.data?.cognome}</h2>
          </Match>
          <Match when={isEditing()}>
            <div class={styles['Operator__heading--row']}>
              <input type="Text" name="nome" value={formData().nome} onInput={handleInputChange} />
              <input type="Text" name="cognome" value={formData().cognome} onInput={handleInputChange} />
            </div>
          </Match>
        </Switch>
      </div>


      <div class={styles.Operator__row}>
        <div class={styles.Operator__cell}>
          <span>Email</span>
          <Switch>
            <Match when={!isEditing()}>
              <p>{props.data.email || "---"}</p>
            </Match>
            <Match when={isEditing()}>
              <input type="text" name="email" value={formData().email} onInput={handleInputChange} />
            </Match>
          </Switch>
        </div>
        <div class={styles.Operator__cell}>
          <span>Ruolo</span>
          <Switch>
            <Match when={!isEditing()}>
              <p>{props.data.ruolo || "---"}</p>
            </Match>
            <Match when={isEditing()}>
              <input type="text" name="ruolo" value={formData().ruolo} onInput={handleInputChange} />
            </Match>
          </Switch>
        </div>
        <div class={styles.Operator__cell}>
          <span>Interno</span>
          <Switch>
            <Match when={!isEditing()}>
              <p>{props.data.interno || "---"}</p>
            </Match>
            <Match when={isEditing()}>
              <input type="text" name="interno" value={formData().interno} onInput={handleInputChange} />
            </Match>
          </Switch>
        </div>
      </div>

      <div class={styles.ModalActions}>
        <Switch>
          <Match when={!isEditing()}>
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
              variant="Delete"
              onClick={() => props.onDelete(props.data.id)}>
            </FormButton>
            <FormButton
              title="Modifica Contatto"
              type="button"
              icon="edit"
              variant="Submit"
              onClick={() => setIsEditing(true)}>
            </FormButton>
          </Match>
          <Match when={isEditing()}>
            <FormButton
              title="Annulla"
              type="button"
              icon="close"
              variant="Cancel"
              onClick={() => setIsEditing(false)}>
            </FormButton>
            <FormButton
              title="Salva Modifiche"
              type="button"
              icon="edit"
              variant="Submit"
              onClick={onSaveInternal}>
            </FormButton>
          </Match>
        </Switch >
      </div>
    </>
  );
}
export default OperatorDetail;
