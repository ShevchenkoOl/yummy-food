import styles from './input.module.css';

const Input = ({ name, icon }) => {
  return (
    <div className={styles.inputContainer}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        type="text"
        className={styles.input}
        placeholder={name}
      />
    </div>
  );
};

export default Input;
