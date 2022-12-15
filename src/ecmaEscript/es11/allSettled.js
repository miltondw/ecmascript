const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve one"));
const promise3 = new Promise((resolve, reject) => resolve("resolve two"));

Promise.allSettled([promise1, promise2, promise3]).then((res) =>
  console.log(res)
); //va a capturar todas las respuestas de las promesas
