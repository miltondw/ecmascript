const funAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Resolve promise Async"), 2000)
      : reject(new Error("Error!"));
  });
};

const FuncAsync = async () => {
  console.log("yaya");
  const res = await funAsync();
  console.log(res);
  console.log("ju");
};
console.log("before promise");
FuncAsync();
console.log("after promise");
