import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Card/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css'
import Footer from './Footer/Footer'
import Header from './Header/Header';
import App from './Home/App';
import Container from 'react-bootstrap/Container';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <App />
    <Container className='d-flex flex-row align-items-center justify-content-center'>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </Container>

    <Footer />
  </React.StrictMode>,
)
