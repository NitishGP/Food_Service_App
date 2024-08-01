import React from "react";
import Loader from "../../layouts/Loader";
import styles from "./Login.module.css"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
    <Header/>
      {5 > 10 ? (
        <Loader />
      ) : (
        <>
          <div className="row " className={styles.wrapper}>
            <div className="col-10 col-lg-5" className={styles.inner}>
              <form className="shadow-lg p-3">
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={"abc@email.com"}
                  ></input>
                </div>
                <div className="form-group ">
                  <label htmlFor="password_field">
                    Password <span>( not less than 8 character)</span>
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={"12345678"}
                  ></input>
                </div>
                <Link className="float-right mb-4" to='/forgotpassword'>Forgot Password</Link>
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py3" 
                >
                  LOGIN
                </button>
                <Link className="float-right mt-3" to='/newuser'>NEW USER?</Link>
              </form>
            </div>
          </div>
          <Footer/>
        </>
      )}

    </>
  );
};

export default Login;
