import { lazy } from "react";

export const Dashboard = lazy(()=> import('../../pages/Dashboard/dashboard.jsx'))
export const Dashbord = lazy(()=> import('../../components/layouts/Dashboard/dashboard.jsx'))
export const Orders = lazy(()=> import('../../pages/Orders/orders.jsx'))
export const Products = lazy(()=> import('../../pages/Products/products.jsx'))
export const Other = lazy(()=> import('../../pages/Other/other.jsx'))
export const AddProduct = lazy(()=> import('../../pages/addProduct/addProduct.jsx'))
export const EditProduct = lazy(()=> import('../../pages/editProductById/editProduct.jsx'))