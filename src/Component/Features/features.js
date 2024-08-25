
import { Container,Col,Row } from 'react-bootstrap';
import img2 from '../../assests/undraw_designer_girl_re_h54c.svg';
import img3 from '../../assests/undraw_personal_information_re_vw8a.svg'
import img4 from '../../assests/undraw_speech_to_text_re_8mtf.svg';
import './features.css';
const Features = ()=>{
   
    return(
        <Container className="features-container mt-5" id ="features">
            <h3>Features</h3>
        <Row className='align-items-center mt-3'>
          <Col md={6}>
            <img src={img2} alt="Placeholder" className="img-fluid features-image mt-3" />
          </Col>
          <Col md={6}>
            <h4>Card Title</h4>
            <p className='text-start'>Our website offers a variety of amazing features that you will love. 
                From seamless navigation to stunning visuals, we've got it all covered.</p>
          </Col>
        </Row>
        <Row className='align-items-center mt-3'>
        <Col md={6}>
            <h4>Card Title</h4>
            <p className='text-start'>Our website offers a variety of amazing features that you will love. 
                From seamless navigation to stunning visuals, we've got it all covered.</p>
          </Col>
          <Col md={6}>
            <img src={img3} alt="Placeholder" className="img-fluid features-image mt-3" />
          </Col>
        </Row>
        <Row className='align-items-center mt-3'>
          <Col md={6}>
            <img src={img4} alt="Placeholder" className="img-fluid features-image mt-3" />
          </Col>
          <Col md={6}>
            <h4>Card Title</h4>
            <p className='text-start'>Our website offers a variety of amazing features that you will love. 
                From seamless navigation to stunning visuals, we've got it all covered.</p>
          </Col>
        </Row>
      </Container>
        
    )
}
export default Features;