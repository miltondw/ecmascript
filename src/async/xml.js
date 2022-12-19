//Este código realiza una serie de peticiones HTTP a una API usando el objeto XMLHttpRequest, que permite hacer solicitudes a servidores desde una aplicación web.
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1/";

function fetchData(urlAPI, callback) {
  const Xhttp = new XMLHttpRequest();
  Xhttp.open("GET", urlAPI, true);
  Xhttp.onreadystatechange = function (event) {
    if (Xhttp.readyState === 4) {
      if (Xhttp.status === 200) {
        callback(null, JSON.parse(Xhttp.responseText));
      } else {
        const error = new Error("Error" + urlAPI);
        return callback(error, null);
      }
    }
  };
  Xhttp.send();
}

fetchData(`${API}products`, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(`${API}products/${data1[0].id}`, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(`${API}categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log("product:", data1[0]);
      console.log("Title:", data2.title);
      console.log("category:", data3.name);
    });
  });
});
