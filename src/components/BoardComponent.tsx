import React, {useEffect, useState} from 'react';
import {Board} from "../models/Board";

const BoardComponent = () => {

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
        <div className='board'>
            
        </div>
    );
};

export default BoardComponent;