import { Negociate } from "./negociate.js";

export class NegociateList {
    //private list : Array<Negociate> = []
    private list : Negociate[] = []

    add (negociacao: Negociate) : void {
        this.list.push(negociacao)
        this.save()
    }

    // salva a lista no localstorage
    save () : void {
        localStorage.setItem('negociacoes', JSON.stringify(this.list))
    }

    getLocalStorage(): Negociate[] {
        const negociacoes = localStorage.getItem('negociacoes')
        if (negociacoes) {
            return JSON.parse(negociacoes).map((negociacao: any) => {
                return new Negociate(
                    new Date(negociacao._date), 
                    negociacao.quantity, 
                    negociacao.value
                );
            });
        } else {
            return [];
        }
    }

    // retorna a lista
    getList () : readonly Negociate[] {
        // [...this.list] -> retorna uma cópia da lista ou podemos usar a proprietade readonly
        return this.list 
    }

}