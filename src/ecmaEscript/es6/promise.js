//Promise

const PromiseFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("😄");
    } else {
      reject("😞");
    }
  });
};

PromiseFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
