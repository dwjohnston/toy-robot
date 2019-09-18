import { parseCommandString } from "../fileReader"
import { Command, Direction } from "../types"

describe("parseCommandString", () => {
    it ("correctly parses a PLACE command", () => {
        
        expect(parseCommandString("PLACE 0,1,NORTH")).toEqual({
            command: Command.PLACE, 
            position: {
                x: 0, 
                y: 1, 
                direction: Direction.NORTH
            }
        }); 

    }); 

    it("throws an error for an incorrect PLACE command", () => {
        expect(() => parseCommandString("PLACE 1,NORTH")).toThrow(); 
    }); 


    it("throws an error for an unrecognised command", () => {
        expect(() => parseCommandString("foo")).toThrow(); 
    }); 


    it("correctly parses a LEFT command", () => {
        expect(parseCommandString("LEFT")).toEqual({
            command: Command.LEFT
        }); 
    }); 
})