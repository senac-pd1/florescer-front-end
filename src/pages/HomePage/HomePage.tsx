import About from "../../containers/About/About";
import Banner from "../../containers/Banner/Banner";
import Billboard from "../../containers/Billboard/Billboard";
import Header from "../../containers/Header/Header";
import { ContainerHomePage } from "./HomePageStyle";
import Footer from "../../containers/Footer/Footer";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <Header />
      <Banner />
      <About />
      <Billboard />
      <Footer />
    </ContainerHomePage>
  );
};

export default HomePage;
