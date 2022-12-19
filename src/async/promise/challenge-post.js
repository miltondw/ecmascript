import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, Data) {
  return fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  });
}
const data = {
  title: "Milton Estrada",
  price: 1200,
  description: "Frontend developer",
  categoryId: 1,
  images: [
    "https://static.platzi.com/media/avatars/avatars/milton-estrada_f25e7180-d544-4f80-b8ec-ba02796ac4c3.jpg",
  ],
};
postData(`${API}/products`, data)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
