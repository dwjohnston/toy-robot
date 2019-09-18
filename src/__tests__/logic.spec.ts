jest.mock('../validatePosition');
jest.mock('../types');
import { validatePosition } from "../validatePosition";
import { place, rotate, move } from "../logic";
import { Direction, getPositionDeltaFromDirection } from "../types";



describe("place", () => {

    it("if position is not valid, it returns null", () => {
        validatePosition.mockReturnValue(false);
        expect(place({
            x: 0,
            y: 1,
            direction: Direction.NORTH
        })).toBe(null);
    })

    it("if position is valid, it returns the position", () => {
        validatePosition.mockReturnValue(true);

        const position = {
            x: 0,
            y: 1,
            direction: Direction.NORTH
        }
        expect(place(position)).toBe(position);
    })
})


describe("rotate", () => {
    it("returns the same position, with correct rotation", () => {
        expect(rotate({
            x: 0,
            y: 0,
            direction: Direction.NORTH
        }, true).direction).toBe(Direction.EAST);

        expect(rotate({
            x: 0,
            y: 0,
            direction: Direction.WEST
        }, true).direction).toBe(Direction.NORTH);

        expect(rotate({
            x: 0,
            y: 0,
            direction: Direction.NORTH
        }, false).direction).toBe(Direction.WEST);
    })
})

describe("move", () => {
    it("if validatePosition returns false, it returns the same position", () => {
        const position = {
            x: 0,
            y: 0,
            direction: Direction.NORTH
        };

        validatePosition.mockReturnValue(false);
        getPositionDeltaFromDirection.mockReturnValue({
            x: 1,
            y: 1
        });
        expect(move(position)).toBe(position);
    });

    describe("if validatePosition returns true", () => {

        it("updates the position with the delta from getPositionDelta", () => {
            validatePosition.mockReturnValue(true);
            getPositionDeltaFromDirection.mockReturnValue({
                x: 1,
                y: 1
            });

            const position = {
                x: 0,
                y: 0,
                direction: Direction.NORTH
            };
            const newPosition = move(position);
            expect(newPosition).toEqual({
                x: 1,
                y: 1,
                direction: Direction.NORTH
            });
        });

    });
})