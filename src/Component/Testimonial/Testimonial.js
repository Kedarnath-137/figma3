import { Container, Carousel } from "react-bootstrap";
import img6 from '../../assests/user-1.png';
import './testimonial.css';

const Testimonials = () => {
  return (
    <>
      <h3 className='text-center mb-4 mt-5' id="testimonials">Testimonials</h3>
      <Container className="testimonial-container mt-4">
        <Carousel>
          <Carousel.Item>
            <img src={img6} alt="First slide" className="testimonial-img" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} alt="Second slide" className="testimonial-img" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img6} alt="Third slide" className="testimonial-img" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default Testimonials;
