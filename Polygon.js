class Polygon {
    constructor(sides) {
        this.sides = sides; // array of side lengths
    }

    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}