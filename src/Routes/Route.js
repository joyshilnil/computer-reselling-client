import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Error/Error";
import AllCategory from "../Pages/Home/Home/AllCategory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/Dashboard/My Orders/MyOrders";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/All Users/AllUsers";
import AdminRoute from "./AdminRoute";
import SellersRoute from "./SellersRoute";
import AllSellers from "../Pages/Dashboard/Add Product/AddProduct";
import AddProduct from "../Pages/Dashboard/Add Product/AddProduct";
import MyProduct from "../Pages/Dashboard/My Product/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allcategory",
        element: <AllCategory></AllCategory>,
      },
      {
        path: "/categorys/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://laptop-bysell-server.vercel.app/categorys/${params.id}`),
      },
    ],
  },  
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/dashboard/allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "/dashboard/addproduct",
        element: <SellersRoute><AddProduct></AddProduct></SellersRoute>
      },
      {
        path: "/dashboard/myproduct",
        element: <SellersRoute><MyProduct></MyProduct></SellersRoute>
      },

    ]
  },
]);

export default router;
