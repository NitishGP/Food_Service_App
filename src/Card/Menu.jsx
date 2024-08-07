import styles from "./Restaurant.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


function Menu({ data }) {
  return (
    <>
    
      <Card style={{ width: '19rem', height: '35rem', margin: 10, position: 'relative' }}>
        <Card.Img className={styles.img} variant="top" src={data.images?.url} />
        <Card.Body >
          <Card.Title className='m-0'>{data.name}</Card.Title>
          <Card.Text style={{ margin: 0, padding: 0 }}>
            {data.description}
          </Card.Text>
          <div style={{ position: 'absolute', bottom: '20px' }}>
            <ListGroup variant="flush">
              <ListGroup.Item  >Ratings: {data.ratings}</ListGroup.Item>
            </ListGroup >
            <Button variant="primary" >Order Now for ${data.price}/-</Button>
          </div>

        </Card.Body>
      </Card>


    </>
  )
}

export default Menu;