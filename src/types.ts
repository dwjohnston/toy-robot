import { ParsingError } from "./errors";

export const TABLE_SIZE = 5;

export enum Direction {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3
};

export enum Command {
    PLACE = "PLACE",
    MOVE = "MOVE",
    LEFT = "LEFT",
    RIGHT = "RIGHT", 
    REPORT = "REPORT"
}

/** I'm not happy with the following four functions. 
 * 
 * You can imagine that if you were extending this code and adding more Commands, it would quickly be prone to errors. 
 * 
 * Have done it this way now, with the view that later you would create a nicer way to create the key:string lookup and reverse lookup. 
 * 
 * It's an area that TypeScript is lacking - it's hard to reference the enum types nicely.
 * 
 * 
 * 
 * See: https://stackoverflow.com/questions/56370727/using-an-enum-to-define-a-list-of-keys-on-an-interface
 * 
 */
export function getDirectionFromString(string: string) : Direction {
    switch(string) {
        case "NORTH": return Direction.NORTH; 
        case "EAST": return Direction.EAST; 
        case "SOUTH": return Direction.SOUTH; 
        case "WEST" : return Direction.WEST; 
        default: throw new ParsingError(`This direction does not exist: ${string}`); 
    }
}

export function getStringFromDirection(direction: Direction) : string {
    switch (direction) {
        case Direction.NORTH: return "NORTH"; 
        case Direction.EAST: return "EAST"; 
        case Direction.SOUTH: return "SOUTH"; 
        case Direction.WEST: return "WEST"; 
        default: throw new Error(`Something went wrong formatting direction: ${direction}`)
    }
}


export function getCommandFromString(string: string) : Command {
    switch(string) {
        case "PLACE": return Command.PLACE; 
        case "LEFT": return Command.LEFT; 
        case "RIGHT": return Command.RIGHT; 
        case "MOVE" : return Command.MOVE; 
        case "REPORT" : return Command.REPORT; 

        default: throw new ParsingError(`This command does not exist: ${string}`); 
    }
}

export function getStringFromCommand(command: Command) : string {
    switch (command) {
        case Command.PLACE: return "PLACE"; 
        case Command.LEFT: return "LEFT"; 
        case Command.RIGHT: return "RIGHT"; 
        case Command.MOVE: return "MOVE"; 
        case Command.REPORT:  return "REPORT"; 
        default: throw new Error(`Something went wrong formatting command: ${command}`)
    }
}

export interface PlaceCommand {
    command :Command.PLACE;  
    position: Position; 
}

interface OtherCommand {
    command: Command.MOVE | Command.LEFT | Command.RIGHT | Command.REPORT
}

export type CommandInstruction = PlaceCommand | OtherCommand; 

export interface Position {
    x: number;
    y: number;
    direction: Direction;
}


type PositionDelta = {
    x: 0 | 1 | -1,
    y: 0 | 1 | -1
};

export function getPositionDeltaFromDirection(direction: Direction) : PositionDelta {
    switch (direction) {
        case Direction.NORTH: return {y: 1, x: 0}; 
        case Direction.EAST: return {y: 0, x: 1}; 
        case Direction.SOUTH: return {y: -1, x:0}; 
        case Direction.WEST: return {y: 0,  x: -1};
        default: throw new Error(`Error getting delta for direction: ${direction}`)
    }
}

