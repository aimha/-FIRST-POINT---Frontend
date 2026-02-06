import { onMount } from 'solid-js';
import { createSignal, For } from 'solid-js';

// import style
import styles from './Sidebar.module.scss'

// import logic
import SidebarClass from './Sidebar.module';

function Sidebar() {
  const [activeTab, setActiveTab] = createSignal('Telefonate');
  const menuItems = ['Dashboard', 'Telefonate', 'Contatti', 'Pratiche'];

  onMount(() => {
  });

  return (
    <>
      <aside class={`${styles.Sidebar}`}>
        <div class={`${styles.Sidebar__header}`}>
          <img src="/logo.svg" alt="First Point" class={`${styles.Sidebar__logo}`} />
        </div>

        <nav class={`${styles.Sidebar__nav}`}>
          <For each={menuItems}>
            {(item) => (
              <button
                class={`${styles.Sidebar__item}`}
              >
                {item}
              </button>
            )}
          </For>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar;
