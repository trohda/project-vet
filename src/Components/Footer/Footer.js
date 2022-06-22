import "../../Styles/Footer/Footer.css";
import catOnLine from "../../Img/Pics/catOnLine.png";
import GM from "../../Img/Icons/GM.svg";
import FB from "../../Img/Icons/FB.svg";

const Footer = () => {
  console.log(GM);
  return (
    <footer className="footer">
      <div className="faceBook">
        <a
          className="faceBookLink"
          href="https://www.facebook.com/WeterynarzPrzymorze/"
          target="blank"
        >
          <img height={50} src={FB} alt="Facebook icon" />
          <div className="facebook">
            <p>facebook.com/</p>
            <p>WeterynarzPrzymorze</p>
          </div>
        </a>
      </div>
      <div className="googleMaps">
        <a
          className="googleMapsLink"
          href="https://www.google.pl/maps/place/Przychodnia+Weterynaryjna+PRZYMORZE+Katarzyna+Grod%C5%BA/@54.4097488,18.5943476,17z/data=!3m1!4b1!4m5!3m4!1s0x46fd0be4f5452093:0xe013fcc8695bae94!8m2!3d54.4097457!4d18.5965363"
        >
          <img height={50} src={GM} alt="Google Maps Icon" />
          <div className="adres">
            <h3>Adres:</h3>
            <p>Obrońców Wybrzeża 11/2</p>
            <p>80-398 Gdańsk</p>
          </div>
        </a>
      </div>
      <div className="openTime">
        <h3>Godziny Otwarcia:</h3>
        <p>Pn-Pt: 10:00-18:00</p>
        <p>Sb - 10:00-15:00</p>
      </div>
    </footer>
  );
};

export default Footer;
