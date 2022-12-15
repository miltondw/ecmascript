// Flat
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
console.log(arr.flat(3));
//FlatMap
const arr2 = [9, 8, 7, 6];
arr2.flatMap((v) => console.log(v * v));
