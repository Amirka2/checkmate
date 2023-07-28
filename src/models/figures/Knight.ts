import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import whiteLogo from "../../../public/figures-logos/white-knight.png"
import blackLogo from "../../../public/figures-logos/black-knight.png"

export class Knight extends Figure {
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.name = FigureNames.KNIGHT;
        if (color === Colors.WHITE)
            this.logo = whiteLogo;
        else
            this.logo = blackLogo;
    }
}