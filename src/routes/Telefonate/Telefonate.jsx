import { createResource, createSignal, Switch } from 'solid-js';

// import context
import { useUi } from "../../data/context/UiContext";

// import utility functions
import { durationFormatter } from '../../lib/formatters';

// import page components
import Cell from '../../components/Table/components/Cell';
import Icon from '../../components/UI/Icon/Icon';
import Modal from '../../components/UI/Modal/Modal';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Table from '../../components/Table/Table';

// import style
import styles from './Telefonate.module.scss';

// get json from endpoint
const fetchCalls = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/5c1eba2e01b630827c6027fbad12d3c8/raw/telefonate.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Telefonate() {
  // handle toast notification
  const { showToast } = useUi();

  // root element in the page
  let root;

  // Table configuration
  const columns = [
    { label: "" }, { label: "Data / Ora" }, { label: "Da" }, { label: "A" }, { label: "Oggetto" }, { label: "Durata" }, { label: "Stato" }, { label: "Billable" }
  ];
  const gridConfig = "2rem 10rem 8rem 8rem 1fr 6rem 8rem 4rem";

  // resources / signals
  const [calls] = createResource(fetchCalls);
  const [selectedCall, setSelectedCall] = createSignal(null);

  const [modalMode, setModalMode] = createSignal("add");
  const [showModal, setShowModal] = createSignal(false);

  return (
    <div ref={root} class={`${styles.Container}`}>
      <PageHeader title="Telefonate">
      </PageHeader>

      <Table
        data={calls()}
        columns={columns}
        gridConfig={gridConfig}
        renderRow={(call) => {
          const boundClass = call.direction === "inbound" ? styles['Table__cell--directionInbound'] : styles['Table__cell--directionOutbound'];
          const billableClass = call.billable ? styles['Table__cell--billableActive'] : styles['Table__cell--billableInactive'];

          return (
            <>
              <Cell class={`${styles['Table__cell--direction']} ${boundClass}`}>
                <Switch>
                  <Match when={call.direction === "inbound"}>
                    <Icon name="call_received" />
                  </Match>
                  <Match when={call.direction === "outbound"}>
                    <Icon name="call_made" />
                  </Match>
                </Switch>
              </Cell>
              <Cell class={styles['Table__cell--date']}>
                {call.started_at}
              </Cell>
              <Cell class={styles['Table__cell--phones']}>
                {call.from_number}
              </Cell>
              <Cell class={styles['Table__cell--phones']}>
                {call.to_number}
              </Cell>
              <Cell class={styles['Table__cell--subject']}>
                {call.oggetto}
              </Cell>
              <Cell class={styles['Table__cell--duration']}>
                {durationFormatter(call.durata_secondi)}
              </Cell>
              <Cell class={styles['Table__cell--status']}>
                <Switch>
                  <Match when={call.status}>
                    Assegnata
                  </Match>
                  <Match when={!call.status}>
                    Da assegnare
                  </Match>
                </Switch>
              </Cell>
              <Cell class={`${styles['Table__cell--billable']} ${billableClass}`}>
                <Switch>
                  <Match when={call.billable}>
                    <Icon name="check_circle" />
                  </Match>
                  <Match when={!call.billable}>
                    <Icon name="cancel" />
                  </Match>
                </Switch>
              </Cell>
            </>
          )
        }}
      />

    </div>
  );
}

export default Telefonate;
