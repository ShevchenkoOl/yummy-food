import RegistrPage from "./components/Pages/RegisterPage/RegisterPage";
import SigninPage from "./components/Pages/SigninPage/SigninPage";
import WellcomPage from "./components/Pages/WellcomPage/WellcomPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorComponent } from "router/ErrorComponent";
// import { routes } from "./router/router";

export const App = () => {
  const routes = createBrowserRouter([
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

  return (

//     <>
// <Router basename="/yummy-food">
//   <Routes >
//     <Route path="/" element={<WellcomPage title={title} mainText={text} />} />
//     <Route path="/register" element={<RegistrPage />} />
//     <Route path="/signin" element={<SigninPage />} />
//     </Routes>
// </Router>
// </>
<RouterProvider router={routes} />
  );
};
