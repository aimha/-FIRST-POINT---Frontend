// Import components
import Icon from '../Icon/Icon';

// import style
import styles from './FormButton.module.scss';

function FormButton(props) {
  return (
    <button 
      type={props.type}
      class={`${styles.Form__btn} ${styles[props.variant]}`}
      onClick={(e) => props.onClick && props.onClick(e)}>
        <Icon name={props.icon}/>
        {props.title}
    </button>
  );
}

export default FormButton;
