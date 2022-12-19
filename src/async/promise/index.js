function delay(time, message) {
  return new Promise((resolve, reject) => {
    if (time && message) return setTimeout(() => resolve(message), time);
    else {
      return reject(new Error("Error message"));
    }
  });
}

delay(3000, "Hello after 3s").then((message) => console.log(message));
