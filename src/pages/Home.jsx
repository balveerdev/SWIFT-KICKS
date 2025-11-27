import Brandslogo from "../components/Brandslogo";
import Header from "../components/Header";
import Mainsec from "../components/Mainsec";
import Category from "../components/Category";
import Benar from "../components/Benar";
import Genderpro from "../components/Genderpro";
import Allcollection from "../components/Allcollection";
import Review from '../components/Review';
import Footer from "../components/Footer";
import { Route, Routes} from "react-router-dom"
import Mancoll from "../components/Mancoll";
import Womancoll from "../components/Womancoll";
import Childcoll from "../components/Childcoll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Home() {

  return (
    <>
   
    <Header />
    <Mainsec />
    <Brandslogo />
    <Category />
    <Benar />
    <Genderpro />
    <Routes>
      <Route path="/" element={<Allcollection />}/>
      <Route path="mancoll" element={<Mancoll />}/>
      <Route path="womancoll" element={<Womancoll />}/>
      <Route path="childcoll" element={<Childcoll />}/>
    </Routes>
    <Review />
    <Footer />
    <ToastContainer />
    </>
  )
}

export default Home;
