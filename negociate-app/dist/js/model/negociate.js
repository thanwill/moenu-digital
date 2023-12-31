export class Negociate {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        // Programação defensiva
        // retorna uma nova data para evitar que a data seja alterada
        const date = new Date(this._date.getTime());
        return date;
    }
    toString() {
        return `
            Data: ${this._date},
            Quantidade: ${this.quantity},
            Valor: ${this.value},
            Volume: ${this.volume}
        `;
    }
}
