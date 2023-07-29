import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";

export class Cell {
    id: number;
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    isAvailable: boolean;

    constructor(x: number, y: number, color: Colors, figure: Figure | null) {
        this.id = Math.random();
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.isAvailable = false;
    }
}