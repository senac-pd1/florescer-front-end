import styled, { css } from "styled-components";
import { colorsVariables } from "./../../style/VariablesStyle";

export const DivSearchBar = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  justify-items: center;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-top: 50px;
`;

export const ButtonSearch = styled.button`
  background-color: ${colorsVariables.green};
  border: none;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
`;

export const SearchResultsTitle = styled.h3`
  color: ${colorsVariables.darkGreen};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SearchResultSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colorsVariables.black};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const MensasageError = styled.p`
  color: ${colorsVariables.darkGreen};
  margin-top: 5px;
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
  color: ${colorsVariables.mediumDarkGreen};
`;

interface FilterOptionProps {
  selected?: boolean;
}

export const ButtonFilter = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colorsVariables.mediumGrey};
  color: #${colorsVariables.white};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ButtonClean = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colorsVariables.mediumGrey};
  color: #${colorsVariables.white};
  border: none;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`;

export const FilterOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  margin-top: 15px;
  margin-bottom: 35px;
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
  display: flex;
  margin-bottom: 20px;

  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FoundFlowerItem = styled.div`
  background: ${colorsVariables.mediumDarkGreen};
  box-shadow: ${colorsVariables.boxShadow};
  display: inline-block;
  box-sizing: border-box;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FoundFlowerImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-top: -15px;
  box-shadow: ${colorsVariables.boxShadow};
  cursor: pointer;
`;

export const FoundFlowerName = styled.span`
  color: white;
  margin-top: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
