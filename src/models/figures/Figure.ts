import {Colors} from "../Colors";
import logo from "../../../public/figures-logos/black-knight.png";
import {Cell} from "../Cell";

export enum FigureNames {
    PAWN = 'pawn',
    KING = 'king',
    QUEEN = 'queen',
    ROOK = 'rook',
    KNIGHT = 'knight',
    BISHOP = 'bishop',
}

export interface Figure {
    color: Colors;
    logo: typeof logo | null;
    name: FigureNames;
    cell: Cell;
}