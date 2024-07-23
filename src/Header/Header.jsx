import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Header.module.css';
function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" className={styles.body}>
      <Container className={styles.body}>
        <Navbar.Brand href="#home"><img style={{width:70}} src="logo.webp" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Form className="d-flex ms-auto w-50" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className={styles.btn} variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;