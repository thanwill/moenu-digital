import NegociateControler from "./controller/negociateController.js";
const controller = new NegociateControler();
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    form.reset();
    const data = document.querySelector('#data');
    data.focus();
});
