import NegociateControler from "./controller/negociateController.js";

const controller = new NegociateControler();

const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();

    form.reset();

    controller.setToast();

    setTimeout(() => {
        controller.removeToast();
    }, 3000);

});

