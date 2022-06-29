import "../../Styles/Offers/Offers.css";
import Offer from "./Offer/Offer";
const Offers = () => {
  return (
    <section className="offersWrapper">
      <h2>Nasza Oferta:</h2>
      <div className="offers">
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
      </div>
    </section>
  );
};

export default Offers;
