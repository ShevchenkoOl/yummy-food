// import Button from "./Button/Button";
import WellcomPage from "./Pages/WellcomPage/WellcomPage";

const title = "Welcome to the app!";
const text = "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."; 

export const App = () => {
  return (
<>
<WellcomPage title={title} mainText={text}/>
{/* <Button text="Register" /> */}
</>
  );
};
