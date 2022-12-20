import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/";

const fecheData = async (urlApi) => {
  const res = await fetch(urlApi);
  return await res.json();
};

const anotherFunction = async () => {
  try {
    const products = await fecheData(`${API}product`);
    const product = await fecheData(`${API}product/${products[0].id}`);
    const category = await fecheData(
      `${API}categories/${product?.category?.id}`
    );
    console.log("product:", product);
    console.log("Title:", product.title);
    console.log("category:", category.name);
  } catch {
    throw new Error("API Not Found");
  }
};
anotherFunction();
