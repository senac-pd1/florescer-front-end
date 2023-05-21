import About from "../../containers/About/About";
import Banner from "../../containers/Banner/Banner";
import Billboard from "../../containers/Billboard/Billboard";
import Header from "../../containers/Header/Header";
import PlantListing from "../../containers/FlowerListing/PlantListing";
import { ContainerHomePage } from "./HomePageStyle";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <Header />
      <Banner />
      <About />
      <Billboard />
      <PlantListing />
    </ContainerHomePage>
  );
};

export default HomePage;
