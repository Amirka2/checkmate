import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board());
    useEffect(() => {
        start();
    }, [])
    function start() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }
  return (
    <div className="App">
      <BoardComponent></BoardComponent>
    </div>
  );
}

export default App;
