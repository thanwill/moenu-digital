import { Negociate } from "../model/negociate.js";

export default class NegociateControler {
    private data: HTMLInputElement;
    private quantity: HTMLInputElement;
    private value : HTMLInputElement;

    constructor() {
        this.data = document.querySelector('#data')
        this.quantity = document.querySelector('#quantidade')
        this.value = document.querySelector('#valor')
    }

    adiciona() {
        const negociacao = new Negociate(
            new Date(this.data.value.replace(/-/g, ',')),
            parseInt(this.quantity.value),
            parseFloat(this.value.value)
        )

        console.log(negociacao)
    }

    // remove a classe hide do elemento #liveToast e adiciona a classe show
    setToast() {
        const toast = document.querySelector('#liveToast')
        toast.classList.remove('hide')
        toast.classList.add('show')
        document.querySelector('.toast-body').innerHTML = 'Negociação adicionada com sucesso!'
    }

    // remove a classe show do elemento #liveToast e adiciona a classe hide
    removeToast() {
        const toast = document.querySelector('#liveToast')
        toast.classList.remove('show')
        toast.classList.add('hide')
    }

}