import React, {FC} from 'react';
import {Board} from "../models/Board";

interface boardProps {
    board: Board,
    setBoard: (board: Board) => void,
}
const BoardComponent: FC<boardProps> = (props: boardProps) => {
    return (
        <div className='board'>
            
        </div>
    );
};

export default BoardComponent;