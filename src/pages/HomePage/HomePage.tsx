import Banner from "../../containers/Banner/Banner";
import Header from "../../containers/Header/Header";
import { ContainerHomePage } from "./HomePageStyle";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <Header />
      <Banner />
    </ContainerHomePage>
  );
};

export default HomePage;
