import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell
}
const CellComponent: FC<cellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo}
                                       alt='logo' className='logo'/>
            }
        </div>
    );
};

export default CellComponent;