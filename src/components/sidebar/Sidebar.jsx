import { onMount } from 'solid-js';
import { A } from '@solidjs/router';
import { createSignal, For } from 'solid-js';

// import style
import styles from './Sidebar.module.scss'

// import logic
import SidebarClass from './Sidebar.module';

function Sidebar() {
  const [activeTab, setActiveTab] = createSignal('Telefonate');
  const menuItems = [
    { label: 'Telefonate', path: '/' },
    { label: 'Contatti', path: '/contatti' },
    { label: 'Pratiche', path: '/pratiche' },
  ];

  onMount(() => {
  });

  return (
    <aside class={styles.Sidebar}>
      <div class={styles.Sidebar__header}>
        <img src="/logo.svg" alt="First Point" class={styles.Sidebar__logo} />
      </div>

      <nav class={styles.Sidebar__nav}>
        <For each={menuItems}>
          {(item) => (
            <A 
              href={item.path}
              class={styles.Sidebar__item}
              activeClass={styles['Sidebar__item--active']}
              end={item.path === '/'} 
            >
              {item.label}
            </A>
          )}
        </For>
      </nav>
    </aside>
  )
}

export default Sidebar;
