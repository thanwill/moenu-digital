import { Negociate } from "./model/negociate.js";


var data = document.getElementById("data");
var quantity = document.querySelector("#quantidade");
var value = document.querySelector("#valor");

var negociate = new Negociate(data, quantity, value);

console.log(negociate);