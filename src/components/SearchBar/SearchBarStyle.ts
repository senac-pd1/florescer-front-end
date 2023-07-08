import styled, { css } from "styled-components";
import { colorsVariables, devices } from "./../../style/VariablesStyle";

export const DivSearchBar = styled.div`
  margin-right: 25%;
`;

export const InputSearch = styled.input`
  margin-left: center;
  padding: 10px;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export const ButtonSearch = styled.button`
  flex: 0 0 auto;
  background-color: ${colorsVariables.green};
  border: none;
  color: ${colorsVariables.white};
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 5px;
`;

export const SearchResultsTitle = styled.h3`
  color: ${colorsVariables.darkGreen};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 25px;
  text-align: center;
  margin-left: 25%;
`;

export const SearchResultSeparator = styled.div`
  height: 2px;
  background-color: ${colorsVariables.black};
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20%;
`;

export const MensasageError = styled.p`
  color: ${colorsVariables.darkGreen};
  margin-top: 15px;
  text-align: center;
  margin-left: 15%;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const FilterTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: ${colorsVariables.mediumDarkGreen};
`;

export const ButtonFilter = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-left: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colorsVariables.white};
  border: none;
  cursor: pointer;
`;

export const FilterButtonText = styled.span`
  margin-left: 5px;
  white-space: nowrap;
`;

export const ButtonClean = styled.button`
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colorsVariables.mediumGrey};
  color: #${colorsVariables.white};
  border: none;
  cursor: pointer;

  margin-left: 5px;
`;

export const FilterOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  justify-items: center;
  margin-top: 5px;
  margin-right: -280px;
`;

export const FilterOption = styled.button<{ selected: boolean }>`
  padding: 3px 10px;
  border-radius: 5px;
  border: 1px solid ${colorsVariables.mediumDarkGreen};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  color: ${colorsVariables.mediumDarkGreen};
  font-weight: bold;
  margin: 3px;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${colorsVariables.darkGreen};
      color: ${colorsVariables.lightGreen};
    `}
`;

export const FoundFlowerRow = styled.div`
  background-color: ${colorsVariables.lightGreen};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-left: 25%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FoundFlowerItem = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
  box-sizing: border-box;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const FoundFlowerImg = styled.img`
  width: 180px;
  height: 150px;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: ${colorsVariables.boxShadow};
  cursor: pointer;
`;

export const FoundFlowerName = styled.span`
  color: white;
  margin-top: 10px;
  text-align: center;
  max-width: 150px;
`;

export const FoundLikeFlower = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 15px;
  margin-left: 140px;
  width: 50px;
  heigth: 50px;
`;

export const ButtonsFound = styled.div`
  margin: 10px;
`;

export const SearchContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  margin-left: 10%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-left: 140px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
