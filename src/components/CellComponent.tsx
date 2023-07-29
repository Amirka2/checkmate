import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell,
    selected: boolean,
    clickOnCell: (cell: Cell) => void,
    isAvailable: boolean,
}
const CellComponent: FC<cellProps> = ({cell, selected, clickOnCell, isAvailable}) => {
    const classNames = ['cell',
        cell.color,
        selected ? 'selected' : ''
    ].join(' ');

    return (
        <div className={classNames} onClick={() => clickOnCell(cell)}>
            {cell.figure?.logo && <img src={cell.figure.logo}
                                       alt='logo' className='logo'/>
            }
            {cell.figure === null && isAvailable && <div className='available'/>}
        </div>
    );
};

export default CellComponent;