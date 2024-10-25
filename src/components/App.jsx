// import Button from "./Button/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrPage from "./Pages/RegisterPage/RegisterPage,";
import SigninPage from "./Pages/SigninPage/SigninPage";
// import WellcomPage from "./Pages/WellcomPage/WellcomPage";
// import SigninPage from "./Pages/SigninPage/SigninPage";
// import WellcomPage from "./Pages/WellcomPage/WellcomPage";

// const title = "Welcome to the app!";
// const text = "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."; 

export const App = () => {
  return (
<>
<Router>
  <Routes>
    <Route path="/register" component={RegistrPage} />
    <Route path="/signin" component={SigninPage} />
    <Route path="/" component={WellcomPage} />
  </Routes>
</Router>
{/* <WellcomPage title={title} mainText={text}/> */}
<RegistrPage />
{/* <SigninPage /> */}
</>
  );
};
