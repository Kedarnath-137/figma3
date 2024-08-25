
import { Container,Row,Col,Button } from "react-bootstrap";
import img1 from '../../assests/img1 (1).svg';
import './home.css';

const Home = ()=>{

    return(
        <Container className="home-container mt-5" id="home">
        <Row >
          <Col md ={6}>
          <h2>WE MAKE YOUR IDEA'S <br></br> <span>INTO REALITY</span></h2>
          <p>Some quick example text to build on the card title make up the bulk of the card's content.Some quick example 
            text to build on the card title and make up the bulk of the card's content</p>
          <Button variant="primary" className="me-3">get started</Button>
          <Button variant="outline-primary">Contact Us</Button>
          </Col>
          <Col md={6}>
          <img src={img1} alt="image"className="img-fluid home-image"></img>
          </Col>
        </Row>
        </Container>
    )


}
export default Home;