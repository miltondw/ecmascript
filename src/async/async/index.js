const funAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("async"), 2000)
      : reject(new Error("Error!"));
  });
};

const otherFn = async () => {
  const res = await funAsync();
  console.log(res, "res");
};
otherFn();
