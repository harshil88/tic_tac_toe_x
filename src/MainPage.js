import { useState } from "react";
import Square from "./component/Square";
import "./styles/styles.css";
import calculateWinner from "./win";

export default function MainPage() {
  const [posArr, setPosArr] = useState(Array(9).fill(""));
  const [currTurn, setTurn] = useState("X");

  function toggleTurn() {
    return currTurn === "X" ? "O" : "X";
  }

  function handleClick(position) {
    if (posArr[position] == "" && calculateWinner(posArr) == "") {
      posArr[position] = currTurn;
      const nreArr = [...posArr];
      setPosArr(nreArr);
      setTurn(toggleTurn());
    }
  }

  function reset() {
    setTurn("X");
    setPosArr([...Array(9).fill("")]);
  }

  function display() {
    if (calculateWinner(posArr) == "") {
      return `Turn for ${currTurn} to play`;
    }
    return `${toggleTurn(currTurn)} player has won the game`;
  }

  return (
    <>
      <div>
        <div className="header">
          <h2>TIC-TAC-TOE</h2>
          <div className="box">
            <div>
              <Square
                style={"square"}
                value={posArr[0]}
                onClick={() => handleClick(0)}
              />
              <Square
                style={"square horizontalBorders"}
                value={posArr[1]}
                onClick={() => handleClick(1)}
              />
              <Square
                style={"square"}
                value={posArr[2]}
                onClick={() => handleClick(2)}
              />
            </div>
            <div>
              <Square
                style={"square verticalBorders"}
                value={posArr[3]}
                onClick={() => handleClick(3)}
              />
              <Square
                style={"square bordersAll"}
                value={posArr[4]}
                onClick={() => handleClick(4)}
              />
              <Square
                style={"square verticalBorders"}
                value={posArr[5]}
                onClick={() => handleClick(5)}
              />
            </div>
            <div>
              <Square
                style={"square"}
                value={posArr[6]}
                onClick={() => handleClick(6)}
              />
              <Square
                style={"square horizontalBorders"}
                value={posArr[7]}
                onClick={() => handleClick(7)}
              />
              <Square
                style={"square"}
                value={posArr[8]}
                onClick={() => handleClick(8)}
              />
            </div>
          </div>
          <h5>{display()}</h5>
          <h5 onClick={() => reset()}>Reset</h5>
        </div>
      </div>
    </>
  );
}
