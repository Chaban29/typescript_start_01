const array: number[] = [100, 200, 300, 400, 500];
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const randomArrayValues: (number | string)[] = [100, 'Hello'];

array.map((item, index) => item + 1);

// Tuples

const coordinates: [number, number] = [999, 888];

coordinates.push(777);