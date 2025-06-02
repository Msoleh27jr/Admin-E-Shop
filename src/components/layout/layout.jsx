import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/login/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddProduct, Dashboard , Dashbord, EditProduct, Orders, Other, Products} from "../../components/lazy/lazy";

function Layout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/",
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashbord />,
      children: [
        {
          index: true,
          element: <Dashboard/>,
        },
        {
          path: "orders",
          element: <Orders/>,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "other",
          element: <Other />,
        },
        {
          path: "addProduct",
          element: <AddProduct />,
        },
        {
          path : "editproduct/:id" ,
          element : <EditProduct/>  
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default Layout;
