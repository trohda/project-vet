import "../../../Styles/Offers/Offer/Offer.css";
const Offer = ({ img, alt, header, paragraph }) => {
  return (
    <article className="offerWrapper">
      <h3>{header}</h3>
      <img src={img} alt={alt} />
      <p>{paragraph}</p>
    </article>
  );
};

export default Offer;
