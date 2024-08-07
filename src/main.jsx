import React from 'react'
import ReactDOM from 'react-dom/client'
import Restaurant from './Card/Restaurant'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header/Header";
import './index.css'
import App from './Home/App';
import OrderDetails from './order/OrderDetails';
import ListOrders from "./order/ListOrders"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './users/Login/Login';
import ForgotPassword from './users/ForgotPassword';
import Register from './users/Register/Register';
import NewPassword from './users/NewPassword';
import Cart from './cart/Cart';
import OrderSuccess from './cart/OrderSuccess';
import ForMenu from './Home/ForMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/orders',
    element: <OrderDetails />,
    errorElement: <div>Orders not found!</div>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<div>Login not found!</div>
  },
  {
    path:'/forgotpassword',
    element:<ForgotPassword/>
  },
  {
    path:'/newuser',
    element:<Register/>
  },
  {
    path:'/newpass',
    element:<NewPassword/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/ordersuccess',
    element:<OrderSuccess/>
  },
  {
    path:'/orderhistory',
    element:<ListOrders/>
  },
  {
    path:'/menu',
    element:<ForMenu/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    <React.StrictMode>
      
      <RouterProvider router={router} />
     
    </React.StrictMode>,
  </>

)
