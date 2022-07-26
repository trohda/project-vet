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
          paragraph={""}
        />
        <Offer
          img={DCW}
          alt={DCW}
          header={"Diagnostyka i leczenie chorób wewnętrznych"}
          paragraph={""}
        />
        <Offer
          img={dermatologia}
          alt={dermatologia}
          header={"Dermatologia"}
          paragraph={""}
        />
        <Offer
          img={chirurgia}
          alt={chirurgia}
          header={"Chirurgia"}
          paragraph={""}
        />
        <Offer img={RtgUsg} alt={RtgUsg} header={"Rtg , Usg"} paragraph={""} />
        <Offer
          img={stomatologia}
          alt={stomatologia}
          header={"Stomatologia"}
          paragraph={""}
        />
        <Offer
          img={okulistyka}
          alt={okulistyka}
          header={"Okulistyka"}
          paragraph={""}
        />
        <Offer
          img={administracja}
          alt={administracja}
          header={"Administracja"}
          paragraph={""}
        />
      </div>
    </section>
  );
};

export default Offers;
