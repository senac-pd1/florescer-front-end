import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { PlanstInterface } from "../../model/PlanstInterface";
import { getPlantById, getWishlist } from "../../services/ApiProfile";

interface PlantsDetailProps {
  id: string;
}

export const PlantsProfileDetail: React.FC<PlantsDetailProps> = (props) => {
  const [plantDetail, setPlantDetail] = useState<PlanstInterface>();

  const getPlantDetail = async (plantId: string) => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const plantService = getPlantById(plantId, token);
        const response = await plantService.get("");
        if (response.data) {
          setPlantDetail(response.data);
        }
      }
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  useEffect(() => {
    console.log(props.id);
    getPlantDetail(props.id);
  }, []);

  return (
    <div>
      {plantDetail && (
        <div>
          <h4>{plantDetail?.name}</h4>
          <p>{plantDetail?.irrigation}</p>
        </div>
      )}
    </div>
  );
};
