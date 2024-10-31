import style from './registerPage.module.css';
import iconUser from '../../../images/icon-user.svg';
import iconEmail from '../../../images/icon-email.svg';
import iconPassword from '../../../images/icon-password.svg';
import Button from 'components/Ul/Button/Button';
import { Link } from 'react-router-dom';
import Input from 'components/Ul/Input/Input';

const RegistrPage = () => {
  return (
    <div className={style.container}>
      <div className={style.section}>
      </div>
      <div className={style.sectionForm}>
        <h2 className={style.title}>Registration</h2>
        <form className={style.form}>
          <Input name="Name"
            icon={<img src={iconUser} alt="icon-user" className={style.icon}/>}
          />
          <Input
            name="Email"
            icon={<img src={iconEmail} alt="icon-evelope" className={style.icon} />}
          />
          <Input
            name="Password"
            icon={<img src={iconPassword} alt="icon-lock" className={style.icon} />}
          />
          <Button text="Sing up" addClass="singUp" />
        </form>
      </div>
      <div className={style.linkContainer}>
        <Link to="/signin" className={style.linkSingIn}>
          Sign in
        </Link>
      </div>
      <div className={style.wave}>
        <svg
          width="1440"
          height="325"
          viewBox="0 0 1440 325"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L527 46.4286L657.739 48.534C900.922 52.4503 1144.07 38.6177 1385.24 7.14621L1440 0V325H0V0Z"
            fill="#1E1F28"
          />
        </svg>
      </div>
    </div>
  );
};

export default RegistrPage;
