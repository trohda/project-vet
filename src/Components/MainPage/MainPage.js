import "../../Styles/MainPage/MainPage.css";
import lab from "../../Img/Pics/Lab.png";

const MainPage = () => {
  return (
    <main className="mainPageWrapper">
      <div className="mainPageHeader">
        <h1>
          Przychodnia Weterynaryjna <br /> <span> PRZYMORZE</span> <br />{" "}
          Katarzyna Grodź
        </h1>
        <p>Doświadczenie w połączeniu z empatią i miłością do zwierząt.</p>
      </div>
      <div className="mainPageContent">
        <h4>Witamy i zapraszamy do gabinetu.</h4>
        <p>Od poniedziałku do piątku: 11:00 - 20:00</p>
        <p>Sobota: 10:00 - 14:00 </p>
      </div>
      <img src={lab} alt="Labrador" />
    </main>
  );
};

export default MainPage;
