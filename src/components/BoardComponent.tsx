import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface boardProps {
    board: Board,
    setBoard: (board: Board) => void,
}
const BoardComponent: FC<boardProps> = (props: boardProps) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
    useEffect(() => {

    }, [selectedCell])
    function clickOnCell(cell: Cell): void {
        if (!selectedCell) { // selection
            highlightCells(cell);
            setSelectedCell(cell);
        }
        if (selectedCell && selectedCell === cell) { // cancel selection
            setSelectedCell(() => null);
        }
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) { // move figure
            let temp = Object.assign([], selectedCell);
            cell.figure = temp.figure;
            selectedCell.figure = null;
            setSelectedCell(cell);
        }
    }
    function isSelected(cell: Cell): boolean {
        return cell.x === selectedCell?.x && cell.y === selectedCell?.y;
    }
    function highlightCells(cell: Cell): void {
        let newBoard = props.board.getCopy();
        newBoard.highlightCells(cell);
        props.setBoard(newBoard);
    }
    return (
        <div className='board'>
            {props.board.cells.map((row, index) => {
                return (<div className='row'>
                            {row.map(cell => <CellComponent
                                key={cell.id} cell={cell} selected={isSelected(cell)}
                                clickOnCell={clickOnCell} isAvailable={cell.isAvailable}/>)}
                        </div>)
            })
            }
        </div>
    );
};

export default BoardComponent;