import About from "../../containers/About/About";
import Banner from "../../containers/Banner/Banner";
import Billboard from "../../containers/Billboard/Billboard";
import Header from "../../containers/Header/Header";
import FlowerListing from "../../containers/FlowerListing/FlowerListing";
import { ContainerHomePage } from "./HomePageStyle";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <Header />
      <Banner />
      <About />
      <Billboard />
      <FlowerListing />
    </ContainerHomePage>
  );
};

export default HomePage;
