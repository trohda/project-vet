import "../../Styles/Header/Header.css";
import logo from "../../Img/Logo/Logo7.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
