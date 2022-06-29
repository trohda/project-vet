import "../../../Styles/Offers/Offer/Offer.css";
const Offer = ({ img, alt, header, paragraph }) => {
  return (
    <article className="offerWrapper">
      <img src={img} alt={alt} />
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </article>
  );
};

export default Offer;
