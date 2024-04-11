import About from "../components/about";
import Carousel from "../components/carousel";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Products from "../components/product";
import Service from "../components/service";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Products/>
        <Carousel/>
        <About/>
        <Service/>
        <Carousel/>
        <Contact/>
        <Footer/>
        </>
     );
}
 
export default Landing;