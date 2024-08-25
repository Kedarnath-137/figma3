import { Container, Row,Col} from "react-bootstrap"
import './footer.css';
const Footer = ()=>{
    return(
        <Container className="footer-container mb-4 mt-5" >
            <Row>
                <Col md={3} className='footer-col'>
                <div>
                    <h4>Contact U</h4>
                    <h5>E mail</h5>
                    <p>contact@JILLIONTECHNOLOGIES.com</p>
                    <h5>Phone</h5>
                    <p>123456789</p>
                    <h5>Address</h5>
                    <p>C-260, Sector-63,Nodia, UP-201301,</p>
                </div>
                </Col>
                <Col md={3} className='footer-col'>
                <h4>COMPANY</h4>
                <p>About Us</p>
                <p>Services</p>
                <p>portfolio</p>
                <p>Development process</p>
                <p>Career</p>
                </Col>
                <Col md={3} className="footer-col">
                <h4>SERVICES</h4>
                <p>Website Development</p>
                <p>Mobile App Development</p>
                <p>E-Commerce Development</p>
                <p>Customer Software Development</p>
                </Col>
                <Col md={3} className="footer-col">
                <h4>SUPPORT</h4>
                <p>Contact</p>
                <p>Term & Policy</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;