import Footer from '../Footer/Footer'

import Header from '../Header/Header';
import Restaurant from '../Card/Restaurant'

import Login from '../users/Login/Login'
import Container from 'react-bootstrap/Container';
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Restaurants');
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
          <Restaurant data={item} />
        ))
        }


      </Container>


      <Footer />
    </>

  )
}

export default App




