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
    // retorna a lista
    getList() {
        // [...this.list] -> retorna uma cópia da lista ou podemos usar a proprietade readonly
        return this.list;
    }
}
