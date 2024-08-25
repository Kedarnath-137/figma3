import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './Component/Navbar';
import Home from './Component/Home/home';
import Features from './Component/Features/features';
import Products from './Component/Products/Products';
import Testimonials from './Component/Testimonial/Testimonial';
import ContactUs from './Component/contactUS/contact';
import Footer from './Component/Footer/footer';

function App() {
  return (
    <div >
      <CustomNavbar/>
      <Home/>
      <Features/>
      <Products/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
