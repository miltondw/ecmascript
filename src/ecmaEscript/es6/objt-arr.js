// Destructuring
const user = { age: 21, username: "miltondw", job: "web developer" };
const { age, job, username } = user;
const animals = ["dog", "cat", "human"];
const [, , humano] = animals;
// Spread operator
const kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

const familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

const values = [1, 2, 3, 4];
function sum(num, ...values) {
  console.log(values);
  return num + values[0];
}
console.log(sum(2, ...values));
// Test
const obj1 = {
  name: "Mr. Michi",
  food: "Pescado",
};
const obj2 = {
  age: 12,
  color: "Blanco",
};

function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  return { ...json1, ...json2 };
}
const res = solution({
  name: "Bigotes",
  food: "Pollito",
});
