import { validatePosition } from "../validatePosition"
import { Direction } from "../types"

describe("validatePosition", () => {
    it("returns true for correct bounds", () => {

        expect(validatePosition({
            x: 0,
            y: 1,
            direction: Direction.SOUTH
        })).toBe(true);

        expect(validatePosition({
            x: 0,
            y: 1,
            direction: Direction.SOUTH
        })).toBe(true);
    
})


    it ("returns false for outside bounds", () => {
        
        expect(validatePosition({
            x: -1,
            y: 1,
            direction: Direction.SOUTH
        })).toBe(false);

        expect(validatePosition({
            x: 5,
            y: 1,
            direction: Direction.SOUTH
        })).toBe(false);
    })




})