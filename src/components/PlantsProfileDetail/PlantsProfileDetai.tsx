import React, { useEffect, useState } from "react";
import { PlanstInterface } from "../../model/PlanstInterface";
import { getPlantById } from "../../services/ApiProfile";
import dracaena from "./../../assets/inspo/dracaena.png";
import maranta from "./../../assets/inspo/maranta.png";
import palmeira from "./../../assets/inspo/palmeira.jpg";
import girassol from "./../../assets/inspo/girassol.png";
import cacto from "./../../assets/inspo/cacto.png";
import alocasia from "./../../assets/inspo/alocasia.jpeg";
import peperomia from "./../../assets/inspo/peperomia.png";
import trombeta from "./../../assets/inspo/trombeta.png";
import filodendro from "./../../assets/inspo/filodendro.png";
import bromelia from "./../../assets/inspo/bromelia.jpg";
import lirio from "./../../assets/inspo/lirio.png";
import trevo from "./../../assets/inspo/trevo-roxo.png";
import espada from "./../../assets/inspo/espada-sao-jorge.png";
import hortencia from "./../../assets/inspo/hortensia.jpg";
import coleus from "./../../assets/inspo/coleus.jpg";
import amorPerfeito from "./../../assets/inspo/amor-perfeito.png";
import hibisco from "./../../assets/inspo/hibisco.png";
import anturio from "./../../assets/inspo/anturio.png";
import samambaia from "./../../assets/inspo/samambaia.png";
import {
  ContainerDetailProfile,
  ContainerInspiration,
  ImageDetail,
  TextDetail,
} from "./PlantsProfileDetail";
interface PlantsDetailProps {
  id: string;
}

export const PlantsProfileDetail: React.FC<PlantsDetailProps> = (props) => {
  const [plantDetail, setPlantDetail] = useState<PlanstInterface>();
  const plantsInspo = [
    {
      id: "bd01771e-56c0-447b-bb99-5ebb5056a2c6",
      img: dracaena,
      name: "dracaena",
    },
    {
      id: "24ef7264-1c7a-4748-a1f2-169a3f369b9b",
      img: maranta,
      name: "maranta",
    },
    {
      id: "fa08d5c7-6872-47f2-bc27-b97706913b67",
      img: palmeira,
      name: "palmeira",
    },
    {
      id: "8b8f0a17-c020-4053-a013-bedebcd1310f",
      img: girassol,
      name: "girassol",
    },
    {
      id: "bfebe447-35f2-4b9d-acd3-3bbe925f258c",
      img: cacto,
      name: "cacto",
    },
    {
      id: "a7f6be37-7486-4508-aae0-c1994d1e9a79",
      img: alocasia,
      name: "alocasia",
    },
    {
      id: "5c40b2ed-e7da-43dd-9f5e-1ad376744291",
      img: samambaia,
      name: "samambaia",
    },
    {
      id: "68d2282f-443b-4abc-a2c9-a336e2540812",
      img: peperomia,
      name: "peperomia",
    },
    {
      id: "96c872d1-e420-4fed-b752-275141b2be7a",
      img: trombeta,
      name: "trombeta",
    },
    {
      id: "216f8f52-b38a-42c2-afec-001ff15f3cad",
      img: filodendro,
      name: "filodendro",
    },
    {
      id: "22eb8425-c01f-4457-9942-0cf958a29349",
      img: bromelia,
      name: "bromelia",
    },
    {
      id: "9af88ee0-29d3-43c6-8e91-6b7c56b6b593",
      img: lirio,
      name: "lirio",
    },
    {
      id: "3ed24873-8bdb-427b-a8f6-adcfa9d03817",
      img: trevo,
      name: "trevo",
    },
    {
      id: "135dda93-0fec-4e77-9033-d1197684e587",
      img: espada,
      name: "espada",
    },
    {
      id: "c74a9008-0ab0-11ee-be56-0242ac120002",
      img: hortencia,
      name: "hortencia",
    },
    {
      id: "d2517c5e-052c-42d5-8f58-ccdd9f1f2df8",
      img: coleus,
      name: "coleus",
    },
    {
      id: "3104798f-4322-42a8-a108-ce8be57535f6",
      img: amorPerfeito,
      name: "amor-perfeito",
    },
    {
      id: "96776b0e-0349-43bd-af0b-2702c1fc8ec6",
      img: hibisco,
      name: "hibisco",
    },
    {
      id: "915e6d28-6708-4d82-bfc1-280d54539c3b",
      img: anturio,
      name: "anturio",
    },
  ];
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
    <>
      {plantDetail && (
        <ContainerDetailProfile>
          <TextDetail>
            <h4>Cuidados {plantDetail?.name}</h4>
            <p>{plantDetail?.irrigation}</p>
          </TextDetail>
          {plantsInspo
            .filter((inspo) => inspo.id === plantDetail.id)
            .map((inspo) => (
              <ContainerInspiration>
                <h4>Inspiração</h4>
                <ImageDetail
                  key={inspo.id}
                  src={inspo.img}
                  alt="inspiração de lugares para a planta"
                />
              </ContainerInspiration>
            ))}
        </ContainerDetailProfile>
      )}
    </>
  );
};
