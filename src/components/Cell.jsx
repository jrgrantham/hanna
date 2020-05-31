import React from "react";
import styled from "styled-components";

const borderThickness = 0;
const margin = 0.5;
export const width = 59;
export const height = 14;
const cellWidth = 100 / width;

const StyledCell = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: ${margin}px;
  width: calc(${cellWidth}% - ${2 * margin}px);
  /* remove the thickness of the borders + margin from the padding */
  padding-bottom: calc(${cellWidth}% - ${(borderThickness + margin) * 2}px);
  /* transition: background-color 0.5s; */

  /* border: ${borderThickness}px solid; */
  /* border-color: rgba(80,80,80, 0.8); */
  /* border-radius: 4px; */
  background: ${(props) => props.color};
  /* background: rgba(80,80,80, 0.8); */
`;

const Cell = (props) => {
  return (
    <StyledCell color={props.color}>
      {/* {console.log("render cell")} */}
    </StyledCell>
  );
};

export default React.memo(Cell);
