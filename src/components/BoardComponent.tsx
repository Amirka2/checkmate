import React, {FC} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

interface boardProps {
    board: Board,
    setBoard: (board: Board) => void,
}
const BoardComponent: FC<boardProps> = (props: boardProps) => {
    return (
        <div className='board'>
            {props.board.cells.map((row, index) => {
                return (<div className='row'>
                            {row.map(cell => <CellComponent key={cell.id} cell={cell}/>)}
                        </div>)
            })
            }
        </div>
    );
};

export default BoardComponent;