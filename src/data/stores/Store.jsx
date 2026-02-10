// Imports
import { createStore } from "solid-js/store"

export const [contacts, setContacts] = createStore([
  {
    id: 1,
    nome: "Studio Legale Verdi",
    tag: ["Cliente", "Commercialista"],
    piva: "IT0123456987",
    email: "info@studioverdi.it",
    telefono: "+390267001200",
    pratiche: 6
  },
  {
    id: 2,
    nome: "Impresa Alfa Srl",
    tag: ["Cliente"],
    piva: "IT0987654321",
    email: "amministrazione@alfasrl.it",
    telefono: "+390512247700",
    pratiche: 6
  },
  {
    id: 3,
    nome: "Claudia Esposito",
    tag: ["Cliente"],
    piva: "—",
    email: "claudia.esposito@email.it",
    telefono: "+390818778990",
    pratiche: 6
  },
]);
