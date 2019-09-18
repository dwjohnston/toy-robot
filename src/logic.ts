import { Position, TABLE_SIZE,  Command, getStringFromDirection, getPositionDeltaFromDirection,  } from "./types";
import { validatePosition } from "./validatePosition";


export function place(position: Position) {
    if (validatePosition(position)) {
        return position;
    }
    else return null; 
}

export function rotate( position: Position, clockWise: boolean,): Position {
    const newDirection = (position.direction + 4 + (clockWise ? 1 : -1)) % 4;

    return {
        ...position,
        direction: newDirection
    }

}

export function move(position: Position): Position {
    const positionDelta = getPositionDeltaFromDirection(position.direction);
    const newPosition = {
        x: position.x + positionDelta.x,
        y: position.y + positionDelta.y,
        direction: position.direction
    }

    if (validatePosition(newPosition)) {
        return newPosition;
    }
    else return position;
}


export function formatReport(position: Position) : string {
    return `${position.x},${position.y},${getStringFromDirection(position.direction)}`;
}
export function report(position: Position) : Position {
    console.info(formatReport(position))
    return position; 
}