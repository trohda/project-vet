import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import PageLayout from "./Components/PageLayout/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Components/Team/Team";
import Offers from "./Components/Offers/Offers";

function App() {
  return (
    <PageLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PageLayout>
  );
}

export default App;
