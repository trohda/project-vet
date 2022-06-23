import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import PageLayout from "./Components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Header />
      {/* <MainPage /> */}
      <Contact />
      <Footer />
    </PageLayout>
  );
}

export default App;
