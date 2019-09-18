export const TABLE_SIZE = 5;

export enum Direction {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3
};

export enum Command {
    PLACE,
    MOVE,
    LEFT,
    RIGHT
}

export interface Position {
    x: number;
    y: number;
    direction: Direction;
}


type PositionDelta = {
    x: 0 | 1 | -1,
    y: 0 | 1 | -1
};

export const DIRECTION_STRINGS: {
    NORTH: "NORTH", 
    EAST: "EAST", 
    SOUTH: "SOUTH", 
    WEST: "WEST"
}

export const DIRECTION_TABLE: {
    NORTH: PositionDelta,
    EAST: PositionDelta,
    SOUTH: PositionDelta,
    WEST: PositionDelta
} = {
    NORTH: {y: 1, x: 0},
    EAST: {y: 0, x: 1},
    SOUTH: {y: -1, x: 0},
    WEST: {y: 0, x: -1},]
}


export class InvalidPositionError extends Error {

}

export class InvalidOrderError extends Error {

}

