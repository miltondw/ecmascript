const user = { username: "Miltondw", age: 21, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.table(values);
console.log(values);
