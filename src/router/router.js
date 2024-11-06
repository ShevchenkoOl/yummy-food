import RegistrPage from "components/Pages/RegisterPage/RegisterPage";
import SigninPage from "components/Pages/SigninPage/SigninPage";
import WellcomPage from "components/Pages/WellcomPage/WellcomPage";
import { createBrowserRouter } from "react-router-dom";
import { ErrorComponent } from "./ErrorComponent";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <WellcomPage />,
    errorElement: <ErrorComponent message="Page not found" />
  },
  {
    path: '/register',
    element: <RegistrPage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  }
]);