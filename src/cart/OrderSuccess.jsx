import React from "react";
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
function OrderSuccess() {
  return (
    <>
      <Header />
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
        
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 120 120">
            <ellipse cx="60" cy="64.5" opacity=".35" rx="48" ry="48.5"></ellipse><ellipse cx="60" cy="60.5" fill="#44bf00" rx="48" ry="48.5"></ellipse><polygon points="53.303,88 26.139,60.838 33.582,53.395 53.303,73.116 86.418,40 93.861,47.443" opacity=".35"></polygon><g><polygon fill="#85ff5e" points="53.303,84 26.139,56.838 33.582,49.395 53.303,69.116 86.418,36 93.861,43.443"></polygon></g>
          </svg>
          <h2>Your Order has been placed successfully.</h2>
          <Link to='/orders'>Go to Orders</Link>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
