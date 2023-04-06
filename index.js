// Source: https://bost.ocks.org/mike/shuffle/
// https://stackoverflow.com/a/2450976/1737158

export default function arrayShuffle(array) {
  if (array && Array.isArray(array) && array?.length > 0) {
    let m = array.length,
      t,
      i;

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
