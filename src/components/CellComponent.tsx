import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell
}
const CellComponent: FC<cellProps> = (props: cellProps) => {
    return (
        <div className={['cell', props.cell.color].join(' ')}>
            
        </div>
    );
};

export default CellComponent;