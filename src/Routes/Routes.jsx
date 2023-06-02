import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Order-Items/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Private from "../Pages/Shared/Private/Private";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order-food/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "private",
        element: (
          <PrivateRoutes>
            <Private></Private>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
