import {Colors} from "../Colors";
import logo from "../../assets/figures-logos/black-knight.png";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = '',
    PAWN = 'pawn',
    KING = 'king',
    QUEEN = 'queen',
    ROOK = 'rook',
    KNIGHT = 'knight',
    BISHOP = 'bishop',
}

export class Figure {
    id: number;
    color: Colors;
    logo: typeof logo | null;
    name: FigureNames;
    cell: Cell;
    constructor(cell: Cell, color: Colors) {
        this.cell = cell;
        this.color = color;
        this.id = Math.random();
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
    }

    protected moveHorizontal(cell: Cell) {

    }
    protected moveVertical(cell: Cell) {

    }
    protected moveDiagonal(cell: Cell) {

    }
    canMove(targetCell: Cell): boolean {
        return true;
    }

    move(targetCell: Cell): void {
        targetCell.figure = this;
        this.cell.figure = null;
    }
}