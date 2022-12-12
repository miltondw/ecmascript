// var,let,const
var lastName = "Estrada";
let Name = "Milton";
const Email = "estradamilton2001@gmail.com";

// Scope and arrow function
const arrow = () => {
  let animal = "dog";
  if (animal == "dog") {
    var perro = "gato"; //Global Scope
    let cat = animal; //Block Scope
  }
  console.log(perro);
  console.log(cat);
  return animal;
};
// Strings
var hi = "Hello" + " " + "word" + Name + " " + lastName; //es5
let Hello = `Hi word! ${Name} ${lastName}`; //es6
// params for defect
function es5(age, name, job) {
  var age = 21;
  var name = "Hamilton";
  var job = "web developer";
  age = age;
  name = name;
  job = job;
  return {
    age,
    name,
    job,
  };
}
const es6 = (age = 21, name = "Hamilton", job = "web developer") => {
  age, name, job;
};
