import React from "react";
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
    <Header/>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 w-100">
          <form className="shadow-lg p-5">
            <h1 className="mb-3">Forgot Password</h1>
            <div className="form-group">
              <label htmlFor="email_field"> Enter Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={"abc@mail.com"}
              />
            </div>
            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-3"
            >
              <Link to='/newpass'>Send Email</Link>
              
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ForgotPassword;
