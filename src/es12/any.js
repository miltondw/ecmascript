const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve one"));
const promise3 = new Promise((resolve, reject) => resolve("resolve two"));

Promise.any([promise1, promise2, promise3]).then((res) => console.log(res));
//va a capturar la respuesta de la primera que sea de forma satisfactoria.
