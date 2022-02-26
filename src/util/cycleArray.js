export const cycleArray = (array, n) =>
  array.map((x, i, arr) => arr[(i+n) % arr.length])

