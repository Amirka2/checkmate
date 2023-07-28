import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";

export class Board {
    cells: Cell[][] = [];

    public initCells = () => {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(j, i, Colors.BLACK, null));
                } else {
                    row.push(new Cell(j, i, Colors.WHITE, null));
                }
            }
            this.cells.push(row);
        }
    }

    private getCell(x: number, y: number): Cell {
        return this.cells[y][x];
    }
    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(this.getCell(i, 1),Colors.BLACK);
            new Pawn(this.getCell(i, 6),Colors.WHITE);
        }
    }
    private addRooks() {
        new Rook(this.getCell(0,0), Colors.BLACK);
        new Rook(this.getCell(7,0), Colors.BLACK);
        new Rook(this.getCell(0,7), Colors.WHITE);
        new Rook(this.getCell(7,7), Colors.WHITE);
    }
    private addKnights() {
        new Knight(this.getCell(1,0), Colors.BLACK);
        new Knight(this.getCell(6,0), Colors.BLACK);
        new Knight(this.getCell(1,7), Colors.WHITE);
        new Knight(this.getCell(6,7), Colors.WHITE);
    }
    private addBishops() {
        new Bishop(this.getCell(2,0), Colors.BLACK);
        new Bishop(this.getCell(5,0), Colors.BLACK);
        new Bishop(this.getCell(2,7), Colors.WHITE);
        new Bishop(this.getCell(5,7), Colors.WHITE);
    }
    private addKings() {
        new King(this.getCell(3,0), Colors.BLACK);
        new King(this.getCell(4,7), Colors.WHITE);
    }
    private addQueens() {
        new Queen(this.getCell(4,0), Colors.BLACK);
        new Queen(this.getCell(3,7), Colors.WHITE);
    }
    public addFigures() {
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addKings();
        this.addQueens();
    }
}
