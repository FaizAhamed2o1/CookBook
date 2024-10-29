import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";

const Home = () => {
  const location = useLocation();
  const showHomePageContent = location.pathname === "/";

  return (
    <div>
      <Navbar></Navbar>

      {showHomePageContent ? (
        <div className="max-w-7xl md:mx-auto mx-4">
          <HeroSection></HeroSection>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
