import style from './wellcomPage.module.css';
// import Logo from './icons.svg';

const WellcomPage = ({ title, mainText }) => {
  return (
    <div className={style.container}>
        {/* <img src={require("./icon.svg").default} alt="logo" /> */}
        {/* <Logo className={style.icon} /> */}

      {/* <svg className={style.icon}>
        <use href="../src/images/icon.svg" />
      </svg> */}
      <h1 className={style.title}>{title}</h1>
      <p className={style.mainText}>{mainText}</p>
    </div>
  );
};

export default WellcomPage;
