import styles from "./Menu.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


function Menu(){
    return(
        <>
    <Card style={{ width: '16rem',margin:10 }}>
      <Card.Img className='p-3' variant="top" src="food.jpeg" />
      <Card.Body>
        <Card.Title  className='m-0'>Card Title</Card.Title>
        <Card.Text style={{margin:0,padding:0}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ListGroup  variant="flush">
        <ListGroup.Item  >$30</ListGroup.Item>
      </ListGroup>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  

        </>
    )
}

export default Menu;