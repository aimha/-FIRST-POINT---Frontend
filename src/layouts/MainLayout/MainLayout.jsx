import { onMount } from 'solid-js';

// import style
import styles from './MainLayout.module.scss'

// import logic
import MainLayoutClass from './MainLayout.module';

// import components
import Sidebar from '../../components/sidebar/Sidebar';

function MainLayout(props) {

  onMount(() => {
  });

  return (
    <div>
      <Sidebar />

      <main>
        {props.children}
      </main>
    </div>
  )
}

export default MainLayout;
