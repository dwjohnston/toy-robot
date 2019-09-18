import { getCommandsFromFile } from "./fileReader";
import { CommandInstruction, Command, Position } from "./types";
import { place, rotate, move, report, formatReport } from "./logic";

function handleCommandInstruction(instruction: CommandInstruction, position?: Position): Position | null {

    if (!position && instruction.command !== Command.PLACE) {
        return null;
    }
    switch (instruction.command) {
        case Command.PLACE: return place(instruction.position);
        case Command.LEFT: return rotate(position, false);
        case Command.RIGHT: return rotate(position, true);
        case Command.MOVE: return move(position);
        case Command.REPORT: return report(position);
        default: throw new Error(`Invalid instruction recieved: ${instruction}`);
    }
}

export function runCommands(commands: CommandInstruction[]) : string {
    const position =  commands.reduce((acc, cur) => {
        return handleCommandInstruction(cur, acc);
    }, null as Position | null); 

    return formatReport(position); 
}

async function run() {
    const file = process.argv[2];

    if (!file) {
        console.error("Error: You must pass a filename with commands to execute");
        process.exit(1);
    }

    const commands = await getCommandsFromFile(file);
    runCommands(commands);
    process.exit(0);
}


run(); 