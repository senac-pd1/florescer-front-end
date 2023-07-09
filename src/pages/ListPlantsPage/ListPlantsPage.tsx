import Header from "../../containers/Header/Header";
import PlantListing from "../../containers/PlantListing/PlantListing";
import { ContainerListPlantsPage } from "./ListPlantsPageStyle";

const ListPlantsPage = () => {
  return (
    <ContainerListPlantsPage>
      <Header />
      <PlantListing></PlantListing>
    </ContainerListPlantsPage>
  );
};

export default ListPlantsPage;
