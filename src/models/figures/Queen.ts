import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import whiteLogo from "../../assets/figures-logos/white-queen.png"
import blackLogo from "../../assets/figures-logos/black-queen.png"

export class Queen extends Figure {
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.name = FigureNames.QUEEN;
        if (color === Colors.WHITE)
            this.logo = whiteLogo;
        else
            this.logo = blackLogo;
    }
}