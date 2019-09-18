import { parseCommands } from "../fileReader"
import { runCommands } from ".."

/*
    For our sanity, testing all the examples given in the problem brief
*/

describe("Example A", () => {
    it ("gives correct response", () => {
        expect (runCommands((parseCommands(`
        PLACE 0,0,NORTH
        MOVE
        REPORT`
        )))).toBe(`0,1,NORTH`); 
    })
})

describe("Example B", () => {
    it ("gives correct response", () => {
        expect (runCommands((parseCommands(`
        PLACE 0,0,NORTH
        LEFT
        REPORT`
        )))).toBe(`0,0,WEST`); 
    })
})

describe("Example C", () => {
    it ("gives correct response", () => {
        expect (runCommands((parseCommands(`
        PLACE 1,2,EAST
        MOVE
        MOVE
        LEFT
        MOVE
        REPORT`
        )))).toBe(`3,3,NORTH`); 
    })
})



