import { createSignal, createContext, useContext } from "solid-js";

const UiContext = createContext();

export function UiProvider(props) {
  const [toast, setToast] = createSignal({ show: false, message: "", type: "info" });

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  };

  return (
    <UiContext.Provider value={{ toast, setToast, showToast }}>
      {props.children}
    </UiContext.Provider>
  );
}

export const useUi = () => useContext(UiContext);
