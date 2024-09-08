function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3));