import React, { Fragment, useEffect } from "react";
import styles from "./OrderDetails.module.css";
import Footer from '../Footer/Footer'

import Header from '../Header/Header';


function OrderDetails() {
  return (
    <>
    <Header/>
    <div className="row d-flex justify-content-between" className={styles.orderdetails}>
      <div className="col-12 col-lg-8 mt-1 " >
        <h1 className="my-5">Order # 123</h1>

        <h4 className="mb-4">Delivery Info</h4>
        <p>
          <b>Name:</b> WSA Developer
        </p>
        <p>
          <b>Phone:</b> 9874563210
        </p>
        <p className="mb-4">
          <b>Address:</b>
          abd house, def street, city, state - 987456
        </p>
        <p>
          <b>Amount:</b> $33.33
        </p>

        <hr />

        <h4 className="my-4">
          Payment :
          <span className={5 < 10 ? styles.greenColor : styles.redColor}>
            <b>{5 < 10 ? " PAID" : " NOT PAID"}</b>
          </span>
        </h4>
        <h4 className="my-4">
          Order Status :
          <span className={5 > 10 ? styles.greenColor : styles.redColor}>
            <b>On the Way!!</b>
          </span>
        </h4>
        <h4 className="my-4">Order Items:</h4>
        <hr />
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default OrderDetails
