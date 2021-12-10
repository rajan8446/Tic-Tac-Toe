import React, { useEffect, useState } from "react";
import Square from "./Component/Square";

function App() {

  const initial=["","","","","","","","",""]

  const [game,setGame]=useState(initial);
  const [isXChance, setXChance]=useState(false);

  const onSquareClick =(index)=>{
    let strings=Array.from(game);
    strings[index]= isXChance ? "X":"0";
    setGame(strings);
    setXChance(!isXChance);
  }

  useEffect(()=>{
    const winner=checkWinner();
    if(winner){
      alert(`Player ${winner} has won the Match😃`)
      setGame(initial)
    }
  },[game])

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', game[0], game[1], game[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (game[a] && game[a] === game[b] && game[a] === game[c]) {
            return game[a];
        }
    }
    return null;
  }

  return (
    <>
    <div className="header">
      <p className="heading-text">Tic-Tac-Toe Game</p>

      <div className="row js-center">
        <Square className="b-bottom-right" state={game[0]} onClick={()=>{onSquareClick(0)}}/>
        <Square className="b-bottom-right" state={game[1]} onClick={()=>{onSquareClick(1)}}/>
        <Square className="b-bottom" state={game[2]} onClick={()=>{onSquareClick(2)}}/>
      </div>
      <div className="row js-center">
        <Square className="b-bottom-right" state={game[3]} onClick={()=>{onSquareClick(3)}}/>
        <Square className="b-bottom-right" state={game[4]} onClick={()=>{onSquareClick(4)}}/>
        <Square className="b-bottom" state={game[5]} onClick={()=>{onSquareClick(5)}}/>
      </div>
      <div className="row js-center">
        <Square className="b-right" state={game[6]} onClick={()=>{onSquareClick(6)}}/>
        <Square className="b-right" state={game[7]} onClick={()=>{onSquareClick(7)}}/>
        <Square state={game[8]} onClick={()=>{onSquareClick(8)}}/>
      </div>
      <button className="clear-button" onClick={()=>{setGame(initial)}}>Clear</button>
      </div>
    
    </>
  );
}

export default App;
