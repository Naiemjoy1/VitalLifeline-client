import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Search from "../Pages/Search/Search";
import Requests from "../Pages/Requests/Requests";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import BloodRequest from "../Pages/Dashboard/Admin/BloodRequest/BloodRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/requests",
        element: <Requests></Requests>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "all-users",
            element: <Users></Users>,
          },
          {
            path: "blood-donation-request",
            element: <BloodRequest></BloodRequest>,
          },
        ],
      },
    ],
  },
]);
