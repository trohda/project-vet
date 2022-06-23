import "../../Styles/Contact/Contact.css";
import iconMail from "../../Img/Icons/iconMail.svg";
import messenger from "../../Img/Icons/messenger.svg";
import iconMobile from "../../Img/Icons/iconMobile.svg";

const Contact = () => {
  return (
    <section className="contactWrapper">
      <div className="contactContent">
        <div className="contactContentHeader">
          <h2>Skontaktuj się z nami</h2>
        </div>
        <div className="contactContentSections">
          <div className="contactSection mail">
            <a
              href="mailto: weterynarz.przymorze@gmail.com"
              target="blank"
              rel="noreferrer"
            >
              <img src={iconMail} alt="Mail icon" />
              <p> weterynarz.przymorze@gmail.com</p>
            </a>
          </div>
          <div className="contactSection messenger">
            <a
              href="http://m.me/WeterynarzPrzymorze"
              target="blank"
              rel="noreferrer"
            >
              <img src={messenger} alt="Messenger icon" />
              <p> WeterynarzPrzymorze</p>
            </a>
          </div>
          <div className="contactSection mobile">
            <a href="tel:601-707-444" target="blank" rel="noreferrer">
              <img src={iconMobile} alt="Mobile icon" />
              <p> +48 601-707-444</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
