import Footer from '../Footer/Footer'

import Header from '../Header/Header';
import Menu from '../Card/Menu'

import Login from '../users/Login/Login'
import Container from 'react-bootstrap/Container';
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function ForMenu() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/food');
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <h1 className="mt-3 m-5 mb-3 ">8 Restaurants</h1>
      <hr />
      <Container className='d-flex flex-wrap flex-row align-items-center justify-content-center'>
      {items.map(item => (
          <Menu data={item} />
        ))
        }
      </Container>
      <Footer />
    </>

  )
}

export default ForMenu;




