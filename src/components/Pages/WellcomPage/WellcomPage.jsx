import styles from "./wellcomPage.module.css";
import logo from "../../../images/logo.svg";
import Button from "components/Ul/Button/Button";

const WellcomPage = () => {

  const title = "Welcome to the app!";
  const text = "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."; 
  
  return (
    <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.section} >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.mainText}>{text}</p>
        </div>
        <div className={styles.buttonContainer}>
        <Button to="/register" text="Registration" addClass="btnRegistr"/>
        <Button to="/signin" text="Sign in" addClass="btnSingIn"/>
        </div>
    </div>
  );
};

export default WellcomPage;
