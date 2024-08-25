import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import img7 from '../../assests/img4.svg';
import './contact.css'; 

const ContactUs = () => {
  return (
    <>
      <h3 className="text-center mb-4 mt-5" id="contact">
        Contact Us
      </h3>
      <Container className="contactus-container mt-5">
        <Row className="align-items-center">
          <Col md={6} className="contactus-image-container">
            <img src={img7} alt="image1" className="img-fluid contactus-image" />
          </Col>
          <Col md={6} className="contactus-form-container">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" className='formInput' />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
