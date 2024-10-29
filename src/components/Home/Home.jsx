import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const location = useLocation();
  const showHomePageContent = location.pathname === "/";

  return (
    <div>
      <Navbar></Navbar>
      {showHomePageContent ? <h1>This is homepage</h1> : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
