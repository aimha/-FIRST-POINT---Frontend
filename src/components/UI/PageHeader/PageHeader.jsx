// import style
import styles from './PageHeader.module.scss';

function Pageheader(props) {
  return (
    <div class={styles.PageHeader}>
      <h1>{props.title}</h1>
      
      <div class={styles.Actions}>
        {props.children}
      </div>
    </div>
  );
}

export default Pageheader;
