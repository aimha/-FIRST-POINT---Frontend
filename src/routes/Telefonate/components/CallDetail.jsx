import { createSignal, Match, Show, Switch } from "solid-js";

// import utility functions
import { durationFormatter } from '../../../lib/formatters';

// import page components
import FormButton from '../../../components/UI/Button/FormButton';
import FormGroup from "../../../components/UI/Input/FormGroup";

// import style
import styles from './CallDetails.module.scss';

function CallDetail(props) {
  const [showTranscript, setShowTranscript] = createSignal(false);
  const [isEditing, setIsEditing] = createSignal(false);
  const [formData, setFormData] = createSignal({
    ...props.data,
    pratica: props.data.pratiche_id?.length === 1 ? props.data.pratiche_id[0] : ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData(), [name]: value });
  };

  return (
    <>
      <div class={styles.Call__heading}>
        <Switch>
          <Match when={!isEditing()}>
            <h2>{props.data.oggetto}</h2>
          </Match>
          <Match when={isEditing()}>
            <input type="Text" name="oggetto" value={formData().oggetto} onInput={handleInputChange} />
          </Match>
        </Switch>
      </div>

      <ul class={styles.Tabs}>
        <li class={!showTranscript() ? styles['Tab--active'] : ''} onClick={() => setShowTranscript(false)}>Dettagli</li>
        <li class={showTranscript() ? styles['Tab--active'] : ''} onClick={() => setShowTranscript(true)}>Trascrizione</li>
      </ul>

      <Switch>
        <Match when={!showTranscript()}>
          <div class={styles.Call__block}>
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
                <span>Stato</span>
                <Switch>
                  <Match when={props.data.pratiche_id.length === 1}>
                    <p>Assegnata</p>
                  </Match>
                  <Match when={props.data.pratiche_id.length < 1}>
                    <p>Da assegnare</p>
                  </Match>
                  <Match when={props.data.pratiche_id.length > 1}>
                    <p>Ambigua</p>
                  </Match>
                </Switch>
              </div>
              <div class={styles.Call__cell}>
                <span>Fatturabile</span>
                <Switch>
                  <Match when={!isEditing()}>
                    <Switch>
                      <Match when={props.data.billable}>
                        <p>Fatturabile</p>
                      </Match>
                      <Match when={!props.data.billable}>
                        <p>Non Fatturabile</p>
                      </Match>
                    </Switch>
                  </Match>
                  <Match when={isEditing()}>
                    <select
                      name="billable"
                      value={formData().billable}
                      onChange={handleInputChange}>
                      <option value="true">Fatturabile</option>
                      <option value="false">Non Fatturabile</option>
                    </select>
                  </Match>
                </Switch>
              </div>
            </div>
          </div>

          <div class={styles.Call__block}>
            <div class={styles.Call__summary}>
              <span>Riassunto Telefonata</span>
              <Switch>
                <Match when={!isEditing()}>
                  <p>{props.data.riassunto}</p>
                </Match>
                <Match when={isEditing()}>
                  <input type="Text" name="riassunto" value={formData().riassunto} onInput={handleInputChange} />
                </Match>
              </Switch>
            </div>
          </div>

          <div class={styles.Call__block}>
            <div class={styles.Call__dossier}>
              <span>Chiamata assegnata a</span>
              <Switch>
                <Match when={!isEditing()}>
                  <Show when={props.data.pratiche_id.length === 1}>
                    <p>{props.data.pratiche_id[0]}</p>
                  </Show>
                  <Show when={props.data.pratiche_id.length !== 1}>
                    <p class={styles.Alert}>Da assegnare</p>
                  </Show>
                </Match>
                <Match when={isEditing()}>
                  <select
                    name="pratica"
                    value={formData().pratica}
                    onChange={handleInputChange}
                    class={styles.SelectCustom}
                  >
                    <option value="">Seleziona una pratica...</option>
                    <option value="e4b2a1c8-7d34-4a92-9f1e-8b5c2d3a4f10">e4b2a1c8-7d34-4a92-9f1e-8b5c2d3a4f10</option>
                    <option value="9c8b7a6f-5e4d-3c2b-1a09-8f7e6d5c4b3a">9c8b7a6f-5e4d-3c2b-1a09-8f7e6d5c4b3a</option>
                    <option value="7d6c5b4a-3f2e-1d0c-b9a8-76543210fedc">7d6c5b4a-3f2e-1d0c-b9a8-76543210fedc</option>
                    <option value="a1b2c3d4-e5f6-4321-8765-0987654321ba">a1b2c3d4-e5f6-4321-8765-0987654321ba</option>
                    <option value="b5a4c3d2-e1f0-4987-a654-321098765432">b5a4c3d2-e1f0-4987-a654-321098765432</option>
                    <option value="f8293d1a-5c6b-4e7d-a2f4-3b9e1c0d5a62">f8293d1a-5c6b-4e7d-a2f4-3b9e1c0d5a62</option>
                  </select>
                </Match>
              </Switch>
            </div>
          </div>
        </Match>

        <Match when={showTranscript()}>
          <div class={styles.Call__block}>
            <div class={styles.Call__transcription}>
              <span>Trascrizione completa</span>
              <p>{props.data.trascrizione}</p>
            </div>
          </div>
        </Match>
      </Switch >

      <div class={styles.ModalActions}>
        <FormButton
          title="Annulla"
          type="button"
          icon="close"
          variant="Cancel"
          onClick={props.onClose}>
        </FormButton>
        <FormButton
          title="Archivia"
          type="button"
          icon="delete"
          variant="Delete">
        </FormButton>
        <FormButton
          title="Modifica"
          type="button"
          icon="edit"
          variant="Submit"
          onClick={() => setIsEditing(true)}>
        </FormButton>
      </div>

    </>
  );
}
export default CallDetail;
