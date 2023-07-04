import { Link } from "react-router-dom";
import image from "./../../assets/notFound.png";
import { IoIosArrowBack } from "react-icons/io";
import {
  BackButton,
  ContainerNotFound,
  MessageNotFound,
} from "./NotFoundStyle";

interface notFoundProps {
  message: string;
}
export const NotFoundCard: React.FC<notFoundProps> = (props) => {
  return (
    <ContainerNotFound>
      <img src={image} alt="ilustração de uma mão segurando um regador" />
      <MessageNotFound>
        <h3>{props.message}</h3>
        <p>
          Mas caso queira adicionar uma planta a sua lista é só voltar para a
          página inicial!
        </p>
      </MessageNotFound>
      <BackButton>
        <IoIosArrowBack />
        <Link to="/">Voltar</Link>
      </BackButton>
    </ContainerNotFound>
  );
};
