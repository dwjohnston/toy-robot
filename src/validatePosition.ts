import { TABLE_SIZE, Position } from "./types";

export function validatePosition(position: Position): boolean {
    if (position.x < 0 || position.y < 0 || position.x >= TABLE_SIZE || position.y >= TABLE_SIZE) {
        return false
    }

    else return true;
}