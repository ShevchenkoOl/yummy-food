import Logo from 'components/Ul/Logo/Logo';
import style from './wellcomPage.module.css';

const WellcomPage = ({ title, mainText }) => {
  return (
    <div className={style.container}>
    <Logo />
      <h1 className={style.title}>{title}</h1>
      <p className={style.mainText}>{mainText}</p>
    </div>
  );
};

export default WellcomPage;
