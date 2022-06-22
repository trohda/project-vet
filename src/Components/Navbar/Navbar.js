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
    <navbar>
      <div className="navMenu">
        <a href="/home">Strona Główna</a>
        <a href="/onas">O nas</a>
        <a href="/kontakt">Kontakt</a>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navMobileMenu">
        <a href="/home" className={`homeLink ${mobileMenuActive}`}>
          Strona Główna
        </a>
        <a href="/about" className={`aboutLink ${mobileMenuActive}`}>
          O nas
        </a>
        <a href="/contact" className={`contactLink ${mobileMenuActive}`}>
          Kontakt
        </a>
      </div>
    </navbar>
  );
};

export default Navbar;
