import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import AnimatedServices from "@/components/AnimatedServices";
import BehindTheCanvas from "@/components/BehindTheCanvas";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {Link} from 'react-scroll'
import VideoCarousel from "@/components/VideoCarousel";
import ContactSection from "@/components/ContactSection";
import InfiniteTechScroll from "@/components/InfiniteTechScroll";

const Index = () => {
  
  return (
    <div className="min-h-screen ">

      <Navigation />
      <Hero />
      <VideoCarousel/>
      <Portfolio />
      <Services />
      <InfiniteTechScroll/>
      <BehindTheCanvas/>
      <Testimonials />
      <ContactSection/>
      {/* <Contact /> */}
      <Footer />
      
    </div>
  );
};

export default Index;
