async function runCode(url) {
  // Tu código aquí 👈
  function validURL(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  let error = "Something was wrong";
  if (!validURL(url)) error = "Invalid URL";
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch {
    throw new Error(error);
  }
}

(async () => await runCode("---"))();
(async () => await runCode("http://"))();
(async () => await runCode("text"))();
