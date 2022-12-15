import fetch from "node-fetch";

const res = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await res.json();
export { products };
