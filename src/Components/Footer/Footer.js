import "../../Styles/Footer/Footer.css";

import GM from "../../Img/Icons/GM.svg";
import FB from "../../Img/Icons/FB.svg";
import Open from "../../Img/Icons/Open.svg";
import telIcon from "../../Img/Icons/telIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="faceBook">
        <a
          className="faceBookLink"
          href="https://www.facebook.com/WeterynarzPrzymorze/"
          target="blank"
          rel="noreferrer"
        >
          <img className="FBIcon" src={FB} alt="Facebook icon" />
        </a>
      </div>
      <div className="telephone">
        <a
          className="telephoneLink"
          href="tel:601-707-444"
          target="blank"
          rel="noreferrer"
        >
          <div>
            <img className="telIcon" src={telIcon} alt="Mobile icon" />
          </div>

          <div className="telephoneLinkContent">
            <h3>Telefon:</h3>
            <p> +48 601-707-444</p>
          </div>
        </a>
      </div>
      <div className="googleMaps">
        <a
          className="googleMapsLink"
          href="https://www.google.pl/maps/place/Przychodnia+Weterynaryjna+PRZYMORZE+Katarzyna+Grod%C5%BA/@54.4097488,18.5943476,17z/data=!3m1!4b1!4m5!3m4!1s0x46fd0be4f5452093:0xe013fcc8695bae94!8m2!3d54.4097457!4d18.5965363"
          target="blank"
          rel="noreferrer"
        >
          <div>
            <img className="GMIcon" src={GM} alt="Google Maps Icon" />
          </div>
          <div className="adresLinkContent">
            <h3>Adres:</h3>
            <p>Obrońców Wybrzeża 11/2</p>
            <p>80-398 Gdańsk</p>
          </div>
        </a>
      </div>
      <div className="openTime">
        <img className="OpenIcon" src={Open} alt="Open Icon" />
        <div>
          <h3>Godziny Otwarcia:</h3>
          <p>Pn-Pt: 11:00-20:00</p>
          <p>Sb - 10:00-14:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
