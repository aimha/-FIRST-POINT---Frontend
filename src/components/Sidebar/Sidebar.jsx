import { onMount } from 'solid-js';
import { A } from '@solidjs/router';
import { createSignal, For } from 'solid-js';

// Import components
import Icon from '../UI/Icon/Icon';

// import style
import styles from './Sidebar.module.scss'

function Sidebar() {
  const [activeTab, setActiveTab] = createSignal('Telefonate');
  const menuItems = [
    { label: 'Telefonate', icon: 'call', path: '/' },
    { label: 'Contatti', icon: 'person', path: '/contatti' },
    { label: 'Pratiche', icon: 'folder', path: '/pratiche' },
    { label: 'Operatori', icon: 'support_agent', path: '/operatori' },
  ];

  onMount(() => {
  });

  return (
    <aside class={styles.Sidebar}>
      <div class={styles.Sidebar__header}>
        <img src="/Logo_FirstPoint.png" alt="First Point" class={styles.Sidebar__logo} />
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
              <Icon name={item.icon} />
              {item.label}
            </A>
          )}
        </For>
      </nav>
    </aside>
  )
}

export default Sidebar;
