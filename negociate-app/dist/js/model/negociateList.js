import { Negociate } from "./negociate.js";
export class NegociateList {
    constructor() {
        //private list : Array<Negociate> = []
        this.list = [];
    }
    add(negociacao) {
        this.list.push(negociacao);
        this.save();
    }
    // salva a lista no localstorage
    save() {
        localStorage.setItem('negociacoes', JSON.stringify(this.list));
    }
    getLocalStorage() {
        const negociacoes = localStorage.getItem('negociacoes');
        if (negociacoes) {
            return JSON.parse(negociacoes).map((negociacao) => {
                return new Negociate(new Date(negociacao._date), negociacao.quantity, negociacao.value);
            });
        }
        else {
            return [];
        }
    }
    // retorna a lista
    getList() {
        // [...this.list] -> retorna uma cópia da lista ou podemos usar a proprietade readonly
        return this.list;
    }
}
