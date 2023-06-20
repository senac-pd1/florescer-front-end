import styled from "styled-components";
import { colorsVariables } from "../../style/VariablesStyle";

export const GardenContainer = styled.section`
  background-color: ${colorsVariables.lightGrey};
  width: 85%;
  margin: 20px auto;
  border-radius: 10px;
`;

export const TitleGarden = styled.h2`
  padding: 25px;
  font-size: 24px;
  font-weight: 600;
  color: ${colorsVariables.mediumDarkGreen};
  border-bottom: 2px solid ${colorsVariables.mediumDarkGreen};
  margin-bottom: 20px;
`;

export const CircleShape1 = styled.div`
  width: 350px;
  height: 350px;
  shape-outside: circle(50% at 30%);
  clip-path: circle(50% at 0%);
  background: rgba(129, 199, 132, 0.39);
  shape-outside: inset(20px 5px 30px 10px);
`;

export const CircleShape2 = styled.div`
  width: 350px;
  height: 350px;
  shape-outside: circle(50% at 30%);
  clip-path: circle(50% at 0%);
  background: rgba(129, 199, 132, 0.39);
`;

// #circulo {
//     float: left;
//     width: 150px;
//     height: 150px;
//     margin: 20px;
//     shape-outside: circle(50% at 30%);
//     clip-path: circle(50% at 0%);
//     background: lightblue;
//   }
