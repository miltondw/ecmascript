//Set add
const list = new Set();

list.add("Item 1");
list.add("Item 2").add("item 3");

console.log(list);
//Sin repetir
const array = ["1a", "1a", "2b", "2b", "3c", "4d", "4d", "5e"];

const sinRepetidos = [...new Set(array)];
console.log(sinRepetidos);
