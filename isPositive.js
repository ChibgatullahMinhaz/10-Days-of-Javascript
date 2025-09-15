function isPositive(a) {
    if (a > 0) {
        return "YES";                 // positive
    } else if (a === 0) {
        throw new Error("Zero Error"); // zero
    } else {
        throw new Error("Negative Error"); // negative
    }
}


isPositive(2) 
isPositive(0)
isPositive(-3) 