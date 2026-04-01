import BestSellers from "../components/BestSellers";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/navbar";
import OrderCTA from "../components/OrdersCTA";
import Specialities from "../components/Specialities";
import Testimonials from "../components/Testmonials";
import Topbar from "../components/Topbar";
import WhatsAppButton from "../components/Whatsapp";

function Home() {
    return ( 
        <div>
            <Topbar/>
            <Navbar/>
            <HeroBanner/>
            <Features/>
            <Specialities/>
            <BestSellers/>
            <OrderCTA/>
            <Testimonials/>
            <FAQ/>
            <Footer/>
            <WhatsAppButton/>
        </div>
     );
}

export default Home;
