
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img5 from '../../assests/undraw_knowledge_re_5v9l.svg';
import './Products.css';
const Products = ()=>{
    return(
        <>
        <h3 className='text-center mb-4 mt-5' id="products">Products</h3>
        <Container className="d-flex products-container mt-5 ">
            <Row>
            <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
            </Col> 
            <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
            </Col>
            <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
            </Col>
            </Row>
            </Container>    

        
        </>
    )
};

export default Products;