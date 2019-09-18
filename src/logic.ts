import { Position, TABLE_SIZE, InvalidPositionError, Command, DIRECTION_TABLE, DIRECTION_STRINGS } from "./types";


export function validatePosition(position: Position): boolean {
    if (position.x < 0 || position.y < 0 || position.x >= TABLE_SIZE || position.y >= TABLE_SIZE) {
        return false
    }

    else return true;
}

export function place(position: Position) {
    if (validatePosition(position)) {
        return position;
    }
    else throw new InvalidPositionError(); 
}

export function rotate(position: Position, clockWise: boolean): Position {

    const newDirection = (position.direction + 4 + (clockWise ? 1 : -1)) % 4;

    return {
        ...position,
        direction: newDirection
    }

}

export function move(position: Position): Position {
    const positionDelta = DIRECTION_TABLE[position.direction];
    const newPosition = {
        x: position + positionDelta.x,
        y: position = positionDelta.y,
        direction: position.direction
    }

    if (validatePosition(newPosition)) {
        return newPosition;
    }
    else return position;
}


export function formatReport(position: Position) : string {
    return `${position.y},${position.x},${DIRECTION_STRINGS[position.direction]}`;
}
export function report(position: Position) {
    console.info(formatReport(position))
}