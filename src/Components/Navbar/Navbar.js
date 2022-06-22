import { useState } from "react";
import "../../Styles/Navbar/Navbar.css";

const Navbar = () => {
  const [icon, setIcon] = useState("navToggler");
  const [mobileMenuActive, seMobileMenuActive] = useState("");

  const navToggle = () => {
    if (mobileMenuActive === "") {
      seMobileMenuActive("activeMobileMenu");
    } else seMobileMenuActive("");

    if (icon === "navToggler") {
      setIcon("navToggler toggle");
    } else setIcon("navToggler");
  };
  return (
    <nav>
      <div className="navMenu">
        <a href="/#">Strona Główna</a>
        <a href="/#">O nas</a>
        <a href="/#">Kontakt</a>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navMobileMenu">
        <a href="/" className={`homeLink ${mobileMenuActive}`}>
          Strona Główna
        </a>
        <a href="/#" className={`aboutLink ${mobileMenuActive}`}>
          O nas
        </a>
        <a href="/#" className={`contactLink ${mobileMenuActive}`}>
          Kontakt
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
