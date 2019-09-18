import {readFile as fsReadFile} from "fs"; 
import { CommandInstruction, Command,  PlaceCommand, getCommandFromString, getDirectionFromString } from "./types";


async function readFile(path: string) : Promise<string> {
    return new Promise ((res, rej) => {
        fsReadFile(path, 'utf8', function(err, data) {
            if (err) rej(err); 
            res(data); 
        });     
    });  
}

export function parsePlaceString(command: Command.PLACE, input: string[]) : PlaceCommand {
    const x = Number.parseInt(input[1]); 
    const y = Number.parseInt(input[2]); 
    const directionStr = input[3]; 
    const direction = getDirectionFromString(directionStr); 

    return {
        command, 
        position: {
            x, y, direction
        }
    }

}

const COMMA_OR_SPACE_REGEX = new RegExp(/\s|,/); 
export function parseCommandString(input: string) :  CommandInstruction | null {
    try {
        const splitString = input.trim().split(COMMA_OR_SPACE_REGEX); 
    
        const command = getCommandFromString(splitString[0]);  

            if (command === Command.PLACE) {
                return parsePlaceString(command, splitString); 
            } 
            else {
                return {
                    command:command
                } 
            }
    
    }catch(err) {
        throw new Error("Error parsing commands");
    }

}

export function parseCommands(input: string) : CommandInstruction[] {
    const strings = input.split("\n");     
    return strings.filter(v=> !!v)//Just drop any empty lines that were in the file
    .map((v) => {
        return parseCommandString(v); 
    }); 
}

export async function getCommandsFromFile(path: string) : Promise<CommandInstruction[]> {
    const data = await readFile(path); 
    const commands = parseCommands(data); 

    return commands;  
}