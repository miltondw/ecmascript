import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/";

function fecheData(urlApi) {
  return fetch(urlApi);
}

fecheData(`${API}products`)
  .then((res) => res.json())
  .then((products) => {
    console.log("product", products[0]);
    return fecheData(`${API}products/${products[0].id}`);
  })
  .then((res) => res.json())
  .then((product) => {
    console.log("Title", product.title);
    return fecheData(`${API}categories/${product?.category?.id}`);
  })
  .then((res) => res.json())
  .then((category) => console.log("Category", category.name))
  .catch((err) => console.error(err));
