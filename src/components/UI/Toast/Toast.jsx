// import style
import styles from './Toast.module.scss';

function Toast(props) {
  return (
    <>
      <div class={styles.Toast}>
       {props.message} 
      </div> 
    </>
  );
}

export default Toast;
