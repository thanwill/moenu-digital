import { Negociate } from "../model/negociate.js";
export default class NegociateControler {
    constructor() {
        this.data = document.querySelector('#data');
        this.quantity = document.querySelector('#quantidade');
        this.value = document.querySelector('#valor');
    }
    // valida se os campos estão preenchidos
    valida() {
        if (this.data.value == '' || this.quantity.value == '' || this.value.value == '') {
            return false;
        }
        return true;
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
    }
    criarNegociacao() {
        if (!this.valida()) {
            this.setToast('Ops, algo deu errado!', 'Preencha todos os campos');
            throw new Error('Preencha todos os campos');
        }
        const negociacao = new Negociate(new Date(this.data.value.replace(/-/g, ',')), parseInt(this.quantity.value), parseFloat(this.value.value));
        this.setToast('Sucesso!', 'Negociação adicionada com sucesso');
        return negociacao;
    }
    // remove a classe hide do elemento #liveToast e adiciona a classe show
    setToast(title, message) {
        const toast = document.querySelector('#liveToast');
        toast.classList.remove('hide');
        toast.classList.add('show');
        document.querySelector('.toast-header').innerHTML = title;
        document.querySelector('.toast-body').innerHTML = message;
        setTimeout(() => {
            this.removeToast();
        }, 2000);
    }
    // remove a classe show do elemento #liveToast e adiciona a classe hide
    removeToast() {
        const toast = document.querySelector('#liveToast');
        toast.classList.remove('show');
        toast.classList.add('hide');
    }
}