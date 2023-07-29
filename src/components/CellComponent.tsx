import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell,
    selected: boolean,
    clickOnCell: (cell: Cell) => void,
}
const CellComponent: FC<cellProps> = ({cell, selected, clickOnCell}) => {
    const classNames = ['cell', cell.color, selected ? 'selected' : ''].join(' ');

    return (
        <div className={classNames} onClick={() => clickOnCell(cell)}>
            {cell.figure?.logo && <img src={cell.figure.logo}
                                       alt='logo' className='logo'/>
            }
        </div>
    );
};

export default CellComponent;