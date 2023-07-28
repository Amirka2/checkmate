import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import whiteLogo from "../../assets/figures-logos/white-rook.png"
import blackLogo from "../../assets/figures-logos/black-rook.png"

export class Rook extends Figure {
    constructor(cell: Cell, color: Colors) {
        super(cell, color);
        this.name = FigureNames.ROOK;
        if (color === Colors.WHITE)
            this.logo = whiteLogo;
        else
            this.logo = blackLogo;
    }
}