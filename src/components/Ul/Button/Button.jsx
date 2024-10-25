import style from './button.module.css';

const Button = ({text, addClass}) => <button className={`${style.button} ${addClass}`}>{text}</button>

export default Button;