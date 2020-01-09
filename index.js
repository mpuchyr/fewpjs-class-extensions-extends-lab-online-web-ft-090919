// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let total = 0
        this.sides.forEach( side => {
            total += side
        })
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0])    
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}