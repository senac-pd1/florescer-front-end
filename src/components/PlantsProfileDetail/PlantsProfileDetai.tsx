import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { PlanstInterface } from "../../model/PlanstInterface";

interface PlantsDetailProps {
  id: string;
}

export const PlantsProfileDetail: React.FC<PlantsDetailProps> = (props) => {
  const [plantDetail, setPlantDetail] = useState<PlanstInterface | null>(null);

  //   const { imdbIDParams } = useParams();

  //   const getMovieByImdbID = () => {
  //     getByOmdbID(`${props.imdbID ? props.imdbID : imdbIDParams}`)
  //       .get("", { params: { i: imdbIDParams } })
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(`Error ${error}`);
  //       });
  //   };

  useEffect(() => {
    //     getMovieByImdbID();
  }, []);

  return (
    <div>
      <>plantinha</>
    </div>
  );
};
