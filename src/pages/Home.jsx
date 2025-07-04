import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
import PropertyList from '../components/PropertyCardSlider';
import LuxuryRealEstateInquiry from '../components/RealEstateInquiry';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="bg-gray-50">
      <Header/>
      <HeroSection />
      <Service />
      <PropertyList/>
      
     
      <LuxuryRealEstateInquiry/>
      
      <Testimonial/>
      <Footer/>
     
     
     
    </div>
  );
}

export default Home;