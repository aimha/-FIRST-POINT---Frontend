import styles from './Cell.module.scss';

const Cell = (props) => {
  return (
    <div 
      class={`${styles.Table__cell} ${props.class || ''}`}
      title={props.title || ''}
    >
      {props.children}
    </div>
  );
};

export default Cell;
