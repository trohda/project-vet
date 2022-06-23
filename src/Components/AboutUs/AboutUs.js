import "../../Styles/AboutUs/AboutUs.css";
import constr from "../../Img/Icons/constructIcon.svg";
const AboutUs = () => {
  return (
    <section className="aboutUsWrapper">
      <h2>Podstrona w budowie</h2>
      <img src={constr} alt=" Construct icon" />
    </section>
  );
};

export default AboutUs;
