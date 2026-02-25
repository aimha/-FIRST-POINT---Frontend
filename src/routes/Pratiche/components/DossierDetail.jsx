import { createSignal } from "solid-js";

// import page components
import FormButton from '../../../components/UI/Button/FormButton';

// import style
import styles from './DossierDetail.module.scss';

function DossierDetail(props) {
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
      <div class={styles.Dossier__heading}>
        <Switch>
          <Match when={!isEditing()}>
            <h2>{props.data.titolo}</h2>
          </Match>
          <Match when={isEditing()}>
            <input type="Text" name="titolo" value={formData().titolo} onInput={handleInputChange} />
          </Match>
        </Switch>
      </div>

      <div class={styles.Dossier__block}>
        <div class={styles.Dossier__row}>
          <div class={styles.Dossier__cell}>
            <span>Data apertura</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.data_apertura || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="date" name="data_apertura" value={formData().data_apertura} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>
          <div class={styles.Dossier__cell}>
            <span>data chiusura</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.data_chiusura || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="date" name="data_chiusura" value={formData().data_chiusura} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>
          <div class={styles.Dossier__cell}>
            <span>Stato</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.stato || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <select
                  name="stato"
                  value={formData().stato}
                  onChange={handleInputChange} // Usa onChange per le select
                  class={styles.SelectCustom}
                >
                  <option value="attiva">Attiva</option>
                  <option value="chiusa">Chiusa</option>
                </select>
              </Match>
            </Switch>
          </div>
        </div>
      </div>

      <div class={styles.Dossier__block}>
        <div class={`${styles.Dossier__row} ${styles.Dossier__notes}`}>
          <div class={styles.Dossier__cell}>
            <span>Descrizione</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.descrizione || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <textarea
                  name="descrizione"
                  value={formData().descrizione}
                  onInput={handleInputChange}
                  rows="3"
                  class={styles.TextareaCustom} // Usa una classe specifica per gestire il resize e il font
                />
              </Match>
            </Switch>
          </div>
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
              title="Elimina Pratica"
              type="button"
              icon="delete"
              variant="Delete"
              onClick={() => props.onDelete(props.data.id)}>
            </FormButton>
            <FormButton
              title="Modifica Pratica"
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
export default DossierDetail;
