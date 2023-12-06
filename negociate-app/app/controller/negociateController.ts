import { Negociate } from "../model/negociate.js";
import { NegociateList } from "../model/negociateList.js";

export default class NegociateControler {
    private data: HTMLInputElement;
    private quantity: HTMLInputElement;
    private value : HTMLInputElement;
    private list = new NegociateList() 

    constructor() {
        this.data = document.querySelector('#data')
        this.quantity = document.querySelector('#quantidade')
        this.value = document.querySelector('#valor')
    }

    // valida se os campos estão preenchidos
    valida() : boolean {
        if(this.data.value == '' || this.quantity.value == '' || this.value.value == '') {
            return false
        }
        return true
    }

    criarNegociacao(): Negociate {
        
        if (!this.valida()) {
            this.exibeToast('Erro!', 'Preencha todos os campos.')
            throw new Error('Preencha todos os campos')
        }

        const negociacao = new Negociate(
            new Date(this.data.value.replace(/-/g, ',')),
            parseInt(this.quantity.value),
            parseFloat(this.value.value)
        )

        // salva no localstorage 
        this.list.add(negociacao)
        this.exibeToast('Sucesso!', 'Negociação adicionada com sucesso.')

        return negociacao
    }

    // remove a classe hide do elemento #liveToast e adiciona a classe show
    exibeToast(title:string, message : string): void{
        const toast = document.querySelector('.toast')
        this.actionToast('show', 'hide')

        document.querySelector('.me-auto').innerHTML = title
        document.querySelector('.toast-body').innerHTML = message

        setTimeout(() => {
            this.actionToast('hide', 'show')
        }, 2000);
    }

    actionToast(add: string, remove: string) : void {
        const toast = document.querySelector('.toast')
        toast.classList.remove(remove)
        toast.classList.add(add)
    }

}