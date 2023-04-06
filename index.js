"use strict";
// Source: https://bost.ocks.org/mike/shuffle/
// https://stackoverflow.com/a/2450976/1737158
Object.defineProperty(exports, "__esModule", { value: true });
function arrayShuffle(array) {
    if (array && Array.isArray(array) && (array === null || array === void 0 ? void 0 : array.length) > 0) {
        var m = array.length, t = void 0, i = void 0;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
    }
    return array;
}
exports.default = arrayShuffle;
