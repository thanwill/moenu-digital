import NegociateControler from "./controller/negociateController.js";

const controller = new NegociateControler();
const form = document.querySelector('.form') as HTMLFormElement;

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.criarNegociacao();

    form.reset();
    const data = document.querySelector('#data') as HTMLInputElement;
    data.focus();

});

