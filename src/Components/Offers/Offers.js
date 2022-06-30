import "../../Styles/Offers/Offers.css";
import Offer from "./Offer/Offer";
import profilaktyka from "../../Img/Icons/Offers/profilaktyka.svg";
import DCW from "../../Img/Icons/Offers/DCW.svg";
import dermatologia from "../../Img/Icons/Offers/dermatologia.svg";
import chirurgia from "../../Img/Icons/Offers/chirurgia.svg";
import RtgUsg from "../../Img/Icons/Offers/RtgUsg.svg";
import stomatologia from "../../Img/Icons/Offers/stomatologia.svg";
import okulistyka from "../../Img/Icons/Offers/okulistyka.svg";
import administracja from "../../Img/Icons/Offers/administracja.svg";

const Offers = () => {
  return (
    <section className="offersWrapper">
      <h2>Nasza Oferta:</h2>
      <div className="offers">
        <Offer
          img={profilaktyka}
          alt={profilaktyka}
          header={"Profilaktyka"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={DCW}
          alt={DCW}
          header={"Diagnostyka i leczenie chorób wewnętrznych"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={dermatologia}
          alt={dermatologia}
          header={"Dermatologia"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={chirurgia}
          alt={chirurgia}
          header={"Chirurgia"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={RtgUsg}
          alt={RtgUsg}
          header={"Rtg , Usg"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={stomatologia}
          alt={stomatologia}
          header={"Stomatologia"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={okulistyka}
          alt={okulistyka}
          header={"Okulistyka"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
        <Offer
          img={administracja}
          alt={administracja}
          header={"Administracja"}
          paragraph={
            "Lorem, ipsum dolor sit amet cLorem, ipsum dolor sit amet consectetur adipisicing elit. ipisci nulla cupiditate. elit. Labore saepe ex voluptates eligendi officia sint n."
          }
        />
      </div>
    </section>
  );
};

export default Offers;
