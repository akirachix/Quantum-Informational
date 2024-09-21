feature/product
import Home from "./components/Product";
import Image from "next/image";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import Defination from "./components/Defination";
import About from "./components/About";
import Footer from "./footer";


export default function () {
  return (
    <div>
feature/product
       <Home/>
      <main>
      <Navbar/>
      <Landingpage/>
      <Defination/>
       <About/>
       <Footer/>

      
      </main>
   
    </div>
 
  );
}
