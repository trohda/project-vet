import { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={(info) => (info.isActive ? "navLinkActive" : "navLink")}
        >
          Strona główna
        </NavLink>
        <NavLink
          to="/offers"
          className={(info) => (info.isActive ? "navLinkActive" : "navLink")}
        >
          Oferta
        </NavLink>
        <NavLink
          to="/team"
          className={(info) => (info.isActive ? "navLinkActive" : "navLink")}
        >
          Zespół
        </NavLink>
        <NavLink
          to="/contact"
          className={(info) => (info.isActive ? "navLinkActive" : "navLink")}
        >
          Kontakt
        </NavLink>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className="navMobileMenu">
        <NavLink
          to="/"
          className={(info) =>
            info.isActive
              ? `homeLink ${mobileMenuActive} mobileLinkActive `
              : `homeLink ${mobileMenuActive}`
          }
        >
          Strona główna
        </NavLink>
        <NavLink
          to="/aboutus"
          className={(info) =>
            info.isActive
              ? `aboutLink ${mobileMenuActive} mobileLinkActive`
              : `aboutLink ${mobileMenuActive}`
          }
        >
          O Nas
        </NavLink>
        <NavLink
          to="/contact"
          className={(info) =>
            info.isActive
              ? `contactLink ${mobileMenuActive} mobileLinkActive`
              : `contactLink ${mobileMenuActive}`
          }
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
