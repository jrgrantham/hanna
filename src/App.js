import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Cell from "./components/Cell";
import { width, height } from "./components/Cell";
import { useInterval } from "./helpers/useInterval";

const stageWidth = width;
const stageHeight = height;

const cells = [];

const nodeList = [];
for (let x = 0; x < stageHeight; x++) {
  for (let y = 0; y < stageWidth; y++) {
    nodeList.push([x, y]);
  }
}

const startStage = Array(stageHeight)
  .fill(1)
  .map(() => Array(stageWidth).fill([0, "lightgrey"]));

const finalStage = Array(stageHeight)
  .fill(1)
  .map(() => Array(stageWidth).fill([0, "white"]));

finalStage[3][6] = [0, "hotpink"];
finalStage[4][6] = [0, "hotpink"];
finalStage[5][6] = [0, "hotpink"];
finalStage[6][6] = [0, "hotpink"];
finalStage[7][6] = [0, "hotpink"];
finalStage[8][6] = [0, "hotpink"];
finalStage[9][6] = [0, "hotpink"];

finalStage[3][10] = [0, "hotpink"];
finalStage[4][10] = [0, "hotpink"];
finalStage[5][10] = [0, "hotpink"];
finalStage[6][10] = [0, "hotpink"];
finalStage[7][10] = [0, "hotpink"];
finalStage[8][10] = [0, "hotpink"];
finalStage[9][10] = [0, "hotpink"];
finalStage[9][11] = [0, "hotpink"];
finalStage[9][12] = [0, "hotpink"];
finalStage[9][13] = [0, "hotpink"];
finalStage[9][14] = [0, "hotpink"];

finalStage[4][16] = [0, "hotpink"];
finalStage[5][16] = [0, "hotpink"];
finalStage[6][16] = [0, "hotpink"];
finalStage[7][16] = [0, "hotpink"];
finalStage[8][16] = [0, "hotpink"];
finalStage[9][17] = [0, "hotpink"];
finalStage[9][18] = [0, "hotpink"];
finalStage[9][19] = [0, "hotpink"];
finalStage[4][20] = [0, "hotpink"];
finalStage[5][20] = [0, "hotpink"];
finalStage[6][20] = [0, "hotpink"];
finalStage[7][20] = [0, "hotpink"];
finalStage[8][20] = [0, "hotpink"];
finalStage[3][17] = [0, "hotpink"];
finalStage[3][18] = [0, "hotpink"];
finalStage[3][19] = [0, "hotpink"];

finalStage[3][22] = [0, "hotpink"];
finalStage[4][22] = [0, "hotpink"];
finalStage[5][22] = [0, "hotpink"];
finalStage[6][22] = [0, "hotpink"];
finalStage[7][22] = [0, "hotpink"];
finalStage[8][23] = [0, "hotpink"];
finalStage[9][24] = [0, "hotpink"];
finalStage[8][25] = [0, "hotpink"];
finalStage[7][26] = [0, "hotpink"];
finalStage[6][26] = [0, "hotpink"];
finalStage[5][26] = [0, "hotpink"];
finalStage[4][26] = [0, "hotpink"];
finalStage[3][26] = [0, "hotpink"];

finalStage[3][28] = [0, "hotpink"];
finalStage[4][28] = [0, "hotpink"];
finalStage[5][28] = [0, "hotpink"];
finalStage[6][28] = [0, "hotpink"];
finalStage[7][28] = [0, "hotpink"];
finalStage[8][28] = [0, "hotpink"];
finalStage[9][28] = [0, "hotpink"];
finalStage[9][29] = [0, "hotpink"];
finalStage[9][30] = [0, "hotpink"];
finalStage[9][31] = [0, "hotpink"];
finalStage[9][32] = [0, "hotpink"];
finalStage[3][29] = [0, "hotpink"];
finalStage[3][30] = [0, "hotpink"];
finalStage[3][31] = [0, "hotpink"];
finalStage[3][32] = [0, "hotpink"];
finalStage[6][29] = [0, "hotpink"];
finalStage[6][30] = [0, "hotpink"];
finalStage[6][31] = [0, "hotpink"];

finalStage[3][36] = [0, "hotpink"];
finalStage[4][36] = [0, "hotpink"];
finalStage[5][37] = [0, "hotpink"];
finalStage[5][39] = [0, "hotpink"];
finalStage[3][40] = [0, "hotpink"];
finalStage[4][40] = [0, "hotpink"];
finalStage[6][38] = [0, "hotpink"];
finalStage[7][38] = [0, "hotpink"];
finalStage[8][38] = [0, "hotpink"];
finalStage[9][38] = [0, "hotpink"];

finalStage[4][42] = [0, "hotpink"];
finalStage[5][42] = [0, "hotpink"];
finalStage[6][42] = [0, "hotpink"];
finalStage[7][42] = [0, "hotpink"];
finalStage[8][42] = [0, "hotpink"];
finalStage[9][43] = [0, "hotpink"];
finalStage[9][44] = [0, "hotpink"];
finalStage[9][45] = [0, "hotpink"];
finalStage[4][46] = [0, "hotpink"];
finalStage[5][46] = [0, "hotpink"];
finalStage[6][46] = [0, "hotpink"];
finalStage[7][46] = [0, "hotpink"];
finalStage[8][46] = [0, "hotpink"];
finalStage[3][43] = [0, "hotpink"];
finalStage[3][44] = [0, "hotpink"];
finalStage[3][45] = [0, "hotpink"];

finalStage[3][48] = [0, "hotpink"];
finalStage[4][48] = [0, "hotpink"];
finalStage[5][48] = [0, "hotpink"];
finalStage[6][48] = [0, "hotpink"];
finalStage[7][48] = [0, "hotpink"];
finalStage[8][48] = [0, "hotpink"];
finalStage[9][49] = [0, "hotpink"];
finalStage[9][50] = [0, "hotpink"];
finalStage[9][51] = [0, "hotpink"];
finalStage[3][52] = [0, "hotpink"];
finalStage[4][52] = [0, "hotpink"];
finalStage[5][52] = [0, "hotpink"];
finalStage[6][52] = [0, "hotpink"];
finalStage[7][52] = [0, "hotpink"];
finalStage[8][52] = [0, "hotpink"];

function App() {
  const [stage, setStage] = useState(startStage);
  const [dropTime, setDropTime] = useState(null);
  const [showbutton, setShowbutton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  function updatedStage(rowY, colX) {
    const newStage = stage.map((row, y) =>
      row.map((cell, x) => {
        if (x === colX && y === rowY) {
          return finalStage[y][x];
        } else {
          return cell;
        }
      })
    );
    setStage(newStage);
  }

  function selectCell() {
    if (nodeList.length > 0) {
      const randomIndex = Math.floor(Math.random() * nodeList.length);
      const [randomCell] = nodeList.splice(randomIndex, 1);
      updatedStage(randomCell[0], randomCell[1]);
    }
  }

  useInterval(() => {
    if (nodeList.length === 0) {
      setDropTime(null);
      message();
    }
    selectCell();
    console.log("running");
  }, dropTime);

  function start() {
    setShowbutton(false);
    setDropTime(35);
  }

  function message() {
    setTimeout(function () {
      setShowMessage(true);
    }, 1500);
  }

  return (
    <Container>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} opacity={cell[0]} color={cell[1]} />)
      )}
      {showbutton ? <button onClick={start}>Start</button> : null}
      {showMessage ? (
        <h6>and I can't wait to start our life together</h6>
      ) : null}
    </Container>
  );
}

export default App;

// const Cell = styled.div`
//   display: flex;
//   box-sizing: border-box;
//   margin: ${margin}px;
//   width: calc(${cellWidth}% - ${2 * margin}px);
//   /* remove the thickness of the borders + margin from the padding */
//   padding-bottom: calc(${cellWidth}% - ${(borderThickness + margin) * 2}px);
//   border: ${borderThickness}px solid;
//   border-radius: 4px;
// `;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  h6 {
    font-size: 0.8rem;
  }

  button {
    font-size: 1rem;
    margin-top: 20px;
  }
`;
