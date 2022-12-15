const promesa = () => {
  return new Promise((resolve, reject) => {
    false ? resolve("Excellent!") : reject(new Error("Error!"));
  });
};

promesa()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally!"));
