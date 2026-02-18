import { createResource, createSignal, Switch } from 'solid-js';

// import context
import { useUi } from "../../data/context/UiContext";

// import page components
import AddContactForm from './components/AddContactForm';
import Cell from '../../components/Table/components/Cell';
import ContactDetail from './components/ContactDetails';
import HeadingButton from '../../components/UI/Button/HeadingButton';
import Modal from '../../components/UI/Modal/Modal';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Table from '../../components/Table/Table';

// import style
import styles from './Contatti.module.scss';

// get json from endpoint
const fetchContacts = async () => {
  const GIST_URL = "https://gist.githubusercontent.com/aimha/e18ffbc06c63d64a2d44e48a6928f5e8/raw/contatti.json";

  const response = await fetch(GIST_URL);
  if (!response.ok) {
    throw new Error(`Errore HTTP: ${response.status}`);
  }
  return await response.json();
};

function Contatti() {
  // handle toast notification
  const { showToast } = useUi();

  // root element in the page
  let root;

  // Table configuration
  const columns = [
    { label: "Nome" }, { label: "Azienda" },
    { label: "E-mail" }, { label: "Telefono" }, { label: "Pratiche" }
  ];
  const gridConfig = "1fr 1fr 1fr 1fr 8rem";

  // resources / signals
  const [contacts] = createResource(fetchContacts);
  const [selectedContact, setSelectedContact] = createSignal(null);

  const [modalMode, setModalMode] = createSignal("add");
  const [showModal, setShowModal] = createSignal(false);

  // handle add contact modal
  const openAddModal = () => {
    setModalMode("add");
    setSelectedContact(null);
    setShowModal(true);
  };

  // handle contact details modal
  const openDetailModal = (contact) => {
    setModalMode("detail");
    setSelectedContact(contact);
    setShowModal(true);
  }

  // handle contact delete
  const deleteContact = async (id) => {
    console.log(`%c ID: ${id} - CANCELLATO `);
    setShowModal(false);
    showToast("Contatto eliminato con successo");
  };

  // handle save for edited contact data
  const handleSave = (id) => {
    console.log(`%c ID: ${id} - MODIFICATO`);
    showToast("Modifiche salvate con successo");
  };

  return (
    <>
      <div ref={root} class={`${styles.Container}`}>
        <PageHeader title="Contatti">
          <HeadingButton title="Nuovo Contatto" onClick={openAddModal}></HeadingButton>
        </PageHeader>

        <Table
          data={contacts()}
          columns={columns}
          gridConfig={gridConfig}
          renderRow={(contact) => {
            const optionalFields = ["cellulare2", "casa", "ufficio", "ufficio2", "fax"];
            const extraCount = optionalFields.filter(field => contact[field] && contact[field].trim() !== "" && contact[field] !== "-").length;

            return (
              <>
                <Cell class={styles['Table__cell--name']}>
                  {contact.nome} {contact.cognome}
                </Cell>
                <Cell class={styles['Table__cell--company']}>
                  {contact.azienda}
                </Cell>
                <Cell class={styles['Table__cell--email']}>
                  {contact.email}
                </Cell>
                <Cell class={styles['Table__cell--phone']}>
                  {contact.cellulare}&nbsp;
                  <Show when={extraCount > 0}>
                    <span>[+{extraCount}]</span>
                  </Show>
                </Cell>
                <Cell class={styles['Table__cell--dossier']}>
                  {Math.floor(Math.random() * 10) + 1}
                </Cell>
              </>
            )
          }}
          onRowClick={openDetailModal}
        />
      </div>

      <Modal
        isOpen={showModal()}
        onClose={() => setShowModal(false)}
        title={modalMode() === "add" ? "Aggiungi Contatto" : "Dettaglio Contatto"}>
        <Switch>
          <Match when={modalMode() === "add"}>
            <AddContactForm
              onClose={() => setShowModal(false)}
              onSuccess={() => {
                setShowModal(false);
                showToast("Contatto inserito con successo");
              }}
            />
          </Match>
          <Match when={modalMode() === "detail"}>
            <ContactDetail
              data={selectedContact()}
              onClose={() => setShowModal(false)}
              onDelete={(id) => deleteContact(id)}
              onSave={(id) => handleSave(id)}
            />
          </Match>
        </Switch>
      </Modal>
    </>
  );
}

export default Contatti;
