import styles from "./Restaurant.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'


function Restaurant({ data }) {
  return (
    <>
      <Card style={{ width: '19rem', height: '35rem', margin: 10, position: 'relative' }}>
        <Card.Img className={styles.img} variant="top" src={data.images[0].url} />
        <Card.Body >
          <Card.Title className='m-0'>{data.name}</Card.Title>
          <Card.Text style={{ margin: 0, padding: 0 }}>
            {data.address}
          </Card.Text>
          <div style={{ position: 'absolute', bottom: '20px' }}>
            <ListGroup variant="flush">
              <ListGroup.Item  >{data.isVeg ? <h5 style={{ color: "green" }}>Veg</h5> : <h5 style={{ color: "red" }} >Non-Veg</h5>}</ListGroup.Item>
            </ListGroup >
            <Link to='/menu'>
            <Button variant="primary" >Check Out the Menu</Button>
            </Link>
            
          </div>

        </Card.Body>
      </Card>


    </>
  )
}

export default Restaurant;