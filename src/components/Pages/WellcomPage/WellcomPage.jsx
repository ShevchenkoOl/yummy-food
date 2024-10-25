<<<<<<< HEAD
import Button from 'components/Button/Button';
import style from './wellcomPage.module.css';
import { Link } from 'react-router-dom';
=======
import Logo from 'components/Ul/Logo/Logo';
import style from './wellcomPage.module.css';
>>>>>>> bb11fae16e621aa8228eab76b26286559788e885

const WellcomPage = ({ title, mainText }) => {
  const icon = (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="68" height="68" rx="12" fill="#8BAA36" />
      <path
        d="M16.4014 16.55V24.5486V24.71V24.5486C16.4014 26.8324 17.3978 28.8545 18.9428 30.1631C19.6983 30.8031 20.1974 31.6671 20.1974 32.6261V45.9775C20.1974 47.4618 21.4729 48.6665 23.0445 48.6665C24.6161 48.6665 25.8916 47.4618 25.8916 45.9775V32.6261C25.8916 31.6671 26.3907 30.8031 27.1462 30.1631C28.6912 28.8545 29.6876 26.8324 29.6876 24.5486V16.55V24.5486"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.043 25.3627V16.3997"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.667 18.2854C48.667 17.2958 47.8166 16.4927 46.7689 16.4927H44.8709C41.7258 16.4927 39.1768 18.9002 39.1768 21.8706V32.6263C39.1768 34.9638 40.7654 36.9339 42.9728 37.6743V45.9777C42.9728 47.4619 44.2483 48.6666 45.8199 48.6666C47.3915 48.6666 48.667 47.4619 48.667 45.9777V38.0041V18.2854Z"
        stroke="#FAFAFA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={style.container}>
<<<<<<< HEAD
      <div>{icon}</div>
=======
    <Logo />
>>>>>>> bb11fae16e621aa8228eab76b26286559788e885
      <h1 className={style.title}>{title}</h1>
      <p className={style.mainText}>{mainText}</p>
      <div>
        <Link to="/register">
          <Button text="Registration" addClass={style.btnReg} />
        </Link>
        <Link to="/signin">
          <Button text="Sign in" addClass={style.btnSing} />
        </Link>
      </div>
    </div>
  );
};

export default WellcomPage;
