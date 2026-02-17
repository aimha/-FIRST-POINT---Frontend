// import style
import styles from './MainLayout.module.scss'

// import context
import { useUi } from "../../data/context/UiContext";

// import components
import Toast from '../../components/UI/Toast/Toast';
import Sidebar from '../../components/Sidebar/Sidebar';

function MainLayout(props) {
  const { toast, setToast } = useUi();

  return (
    <div class={styles.Page}>
      <div class={styles.Sidebar}>
        <Sidebar />
      </div>

      <main class={styles.Main}>
        {props.children}
      </main>

      <Show when={toast().show}>
        <Toast message={toast().message} />
      </Show>
    </div>
  )
}

export default MainLayout;
