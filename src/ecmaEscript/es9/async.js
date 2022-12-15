function* generatePromise() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}
const generatePromise = generatePromise();
async function* generateASync() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGenerate = generateASync();

generatePromise.next().value.then((res) => console.log(res, "promise"));
asyncGenerate.next().then((res) => console.log(res.value, "async"));

async function* objectAsyncPromise(arr) {
  for await (let res of arr) {
    console.log(res, "promise");
  }
}
async function objectAsync(arr) {
  for await (let res of arr) {
    console.log(res, "async");
  }
}
const arrName = ["Chirly", "Daniela", "Marcela", "Tatiana"];
const namesAsyncPromise = objectAsyncPromise(arrName);
namesAsyncPromise.next().then((res) => res);
objectAsync(arrName);
