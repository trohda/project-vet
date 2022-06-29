import "../../Styles/MainPage/MainPage.css";
import lab from "../../Img/Pics/Lab.png";

const MainPage = () => {
  return (
    <main>
      <div className="mainPageContent">
        <p>Witamy i zapraszamy do gabinetu</p>
        <p>Od poniedziałku do piątku: 11:00 - 20:00 </p>
        <p>Sobota: 10:00 - 14:00 </p>
        <h1>Weterynarz Przymorze - Kasia Grodź</h1>
        <img src={lab} alt="Labrador" />
      </div>
    </main>
  );
};

export default MainPage;
