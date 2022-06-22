import "../../Styles/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <div className="navMenu">
        <a href="/home">Strona Główna</a>
        <a href="/onas">O nas</a>
        <a href="/kontakt">Kontakt</a>
      </div>
      <div className="navToggler">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </navbar>
  );
};

export default Navbar;
