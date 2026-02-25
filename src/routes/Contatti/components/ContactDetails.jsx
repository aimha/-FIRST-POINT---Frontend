import { createSignal } from "solid-js";

// import page components
import FormButton from '../../../components/UI/Button/FormButton';

// import style
import styles from './ContactDetails.module.scss';

function ContactDetail(props) {
  // editing signal
  const [isEditing, setIsEditing] = createSignal(false);

  // pass props to editing form
  const [formData, setFormData] = createSignal({ ...props.data });

  // eventual secondary page for details
  const [showSecondary, setShowSecondary] = createSignal(false);

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
      <div class={styles.Contact__heading}>
        <Switch>
          <Match when={!isEditing()}>
            <h2>{props.data?.nome} {props.data?.cognome}</h2>
          </Match>
          <Match when={isEditing()}>
            <div class={styles['Contact__heading--row']}>
              <input type="Text" name="nome" value={formData().nome} onInput={handleInputChange} />
              <input type="Text" name="cognome" value={formData().cognome} onInput={handleInputChange} />
            </div>
          </Match>
        </Switch>
      </div>

      <ul class={styles.Tabs}>
        <li class={!showSecondary() ? styles['Tab--active'] : ''} onClick={() => setShowSecondary(false)}>Dettagli</li>
      </ul>

      <div class={styles.Contact__block}>
        <div class={styles.Contact__row}>
          <div class={styles.Contact__cell}>
            <span>Azienda</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.azienda || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="azienda" value={formData().azienda} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
            <span>Dipartimento</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.dipartimento || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="dipartimento" value={formData().dipartimento} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
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
        </div>

        <div class={styles.Contact__row}>
          <div class={styles.Contact__cell}>
            <span>Cellulare</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.cellulare || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="cellulare" value={formData().cellulare} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
            <span>Cellulare 2</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.cellulare2 || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="cellulare2" value={formData().cellulare2} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
            <span>Casa</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.case || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="casa" value={formData().casa} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>
        </div>

        <div class={styles.Contact__row}>
          <div class={styles.Contact__cell}>
            <span>Ufficio</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.ufficio || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="ufficio" value={formData().ufficio} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
            <span>Ufficio 2</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.cellulare2 || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="ufficio2" value={formData().ufficio2} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>

          <div class={styles.Contact__cell}>
            <span>Fax</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.fax || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <input type="text" name="fax" value={formData().fax} onInput={handleInputChange} />
              </Match>
            </Switch>
          </div>
        </div>
      </div>

      <div class={styles.Contact__block}>
        <div class={`${styles.Contact__row} ${styles.Contact__notes}`}>
          <div class={styles.Contact__cell}>
            <span>Note</span>
            <Switch>
              <Match when={!isEditing()}>
                <p>{props.data.altro || "---"}</p>
              </Match>
              <Match when={isEditing()}>
                <textarea
                  name="altro"
                  value={formData().altro}
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
export default ContactDetail;
