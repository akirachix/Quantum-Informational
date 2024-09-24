import Home from "./components/Product";
import Navbar from "./Navbar";
import Landingpage from "./Landingpage";
import Defination from "./components/Defination";
import About from "./components/About";
import Footer from "./footer";
import Team from "./components/Team";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Defination />
      <About />
      <Home />
      <Team />
      <Footer />
    </div>
  );
};

export default MainPage;
