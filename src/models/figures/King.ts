import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import whiteLogo from "../../assets/figures-logos/white-king.png"
import blackLogo from "../../assets/figures-logos/black-king.png"

export class King extends Figure {
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.name = FigureNames.KING;
        if (color === Colors.WHITE)
            this.logo = whiteLogo;
        else
            this.logo = blackLogo;
    }
}