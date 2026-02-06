// Imports
import { createRoot } from "solid-js"
import { createStore } from "solid-js/store"

function createStateManagement() {
  const [state, setState] = createStore({
    username: "First Point",
    location: "Fidenza"
  });

  return { state };
}

export default createRoot(createStateManagement);
