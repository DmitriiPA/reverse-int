module.exports = function reverse (n) {
    return [...Math.abs(n).toString()].reverse().join("")
}