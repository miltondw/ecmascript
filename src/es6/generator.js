function* iterate(arr) {
  for (let value of arr) {
    yield value;
  }
}
const it = iterate(["a", "b", "c", "d"]);

console.log(it.next().value);
function* getId() {
  let michiId = 1;
  while (true) {
    yield michiId++;
  }
}
const id = getId();

for (let i = 1; i <= 10; i++) {
  console.log(id.next().value);
}
