import Footer from '../Footer/Footer'

import Header from '../Header/Header';
import Menu from '../Card/Menu'

import Login from '../users/Login/Login'
import Container from 'react-bootstrap/Container';
import './App.css'

function App() {
  return (
    <>
      <Header />

      
      

      
      <h1 className="mt-3 m-5 mb-3 ">8 Restaurants</h1>
      <hr />
      <Container className='d-flex flex-row align-items-center justify-content-center'>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        
      </Container>
      
      <Footer />
    </>

  )
}

export default App
