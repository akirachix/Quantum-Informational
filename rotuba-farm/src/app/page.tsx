import Home from "./components/Product";
import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import Defination from "./components/Defination";
import About from "./components/About";
import Footer from "./footer";
import Team from "./components/Team"


export default function () {
  return (
    <div>
            <Navbar/>
            <Landingpage/>
            <Defination/>
            <About/>
             <Home/>
            <Team/>
            <Footer/>
    </div>
 
  );
}
