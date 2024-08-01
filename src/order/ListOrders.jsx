import React from "react";
import Footer from '../Footer/Footer'

import Header from '../Header/Header';
// import { MDBDataTable } from "mdbreact";
// import { FaRegEye } from "react-icons/fa6";
import Loader from "../layouts/Loader"; 
import styles from "./OrderDetails.module.css";

const ListOrders = () => {
  return (
    <>
    <Header/>
      <div className={styles.orderdetails}>
        <h1 className="my-5">My Orders</h1>

        {5 > 10 ? (
          <Loader />
        ) : (
          // <MDBDataTable data="" className="px-3" bordered striped hover />
          <>
          <p>Your Order Details</p>
          <tbody>
            <tr className=" d-flex justify-content-between">
              <td>
              <input type="number" />
              </td>
              <td>
                <input placeholder="search" />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <p><b>Restaurant Name</b></p>
              </td>
              <td>
                <p><b>Order Items</b></p>
              </td>
              <td>
                <p><b>Num. of Items</b></p>
              </td>
              <td>
                <p><b>Amount</b></p>
              </td>
              <td>
                <p><b>Status</b></p>
              </td>
              <td>
                <p><b>Order Date</b></p>
              </td>
              <td>
                <p><b>Action</b></p>
              </td>
            </tr>
          </tbody>
          
          </>
          
        )}
      </div>
      <Footer/>
    </>
  );
};

export default ListOrders;
