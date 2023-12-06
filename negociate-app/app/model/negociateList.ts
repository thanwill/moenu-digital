import { Negociate } from "./negociate";

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

    // retorna a lista
    getList () : readonly Negociate[] {
        // [...this.list] -> retorna uma cópia da lista ou podemos usar a proprietade readonly
        return this.list
    }

}