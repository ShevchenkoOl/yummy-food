import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WellcomPage from "components/Pages/WellcomPage/WellcomPage";
import RegistrPage from "components/Pages/RegisterPage/RegisterPage,";
import SigninPage from "components/Pages/SigninPage/SigninPage";

const title = "Welcome to the app!";
const text = "This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."; 

export const App = () => {
  return (
<>
<Router basename="/yummy-food">
  <Routes >
    <Route path="/" element={<WellcomPage title={title} mainText={text} />} />
    <Route path="/register" element={<RegistrPage />} />
    <Route path="/signin" element={<SigninPage />} />
    </Routes>
</Router>
</>
  );
};
