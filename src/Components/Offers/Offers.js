import "../../Styles/Offers/Offers.css";
import Offer from "./Offer/Offer";
import blood from "../../Img/Icons/Offers/blood.svg";
import cardio from "../../Img/Icons/Offers/cardio.svg";
import cure from "../../Img/Icons/Offers/cure.svg";
import examination from "../../Img/Icons/Offers/examination.svg";
import nurse from "../../Img/Icons/Offers/nurse.svg";
import surgery from "../../Img/Icons/Offers/surgery.svg";
import tooth from "../../Img/Icons/Offers/tooth.svg";
import vaccine from "../../Img/Icons/Offers/vaccine.svg";

const Offers = () => {
  return (
    <section className="offersWrapper">
      <h2>Nasza Oferta:</h2>
      <div className="offers">
        <Offer
          img={blood}
          alt={blood}
          header={"Oferta 1"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={cardio}
          alt={cardio}
          header={"Oferta 2"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={cure}
          alt={cure}
          header={"Oferta 3"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={examination}
          alt={examination}
          header={"Oferta 4"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={nurse}
          alt={nurse}
          header={"Oferta 5"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={surgery}
          alt={surgery}
          header={"Oferta 6"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={tooth}
          alt={tooth}
          header={"Oferta 7"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={vaccine}
          alt={vaccine}
          header={"Oferta 8"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
      </div>
    </section>
  );
};

export default Offers;
