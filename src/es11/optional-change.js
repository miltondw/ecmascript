const users = {
  char: {
    country: {
      MX: "Mexico",
    },
  },
  mil: {
    country: {
      CO: "Colombia",
    },
  },
  yo: {
    country: {
      CL: "Chile",
    },
  },
};
console.log(users.char.country); //:)
console.log(users.charly.country); //:(
console.log(users.char.country?.CO); //Optional change
