export class Negociate {

    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {}

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        // Programação defensiva
        // retorna uma nova data para evitar que a data seja alterada
        const date = new Date(this._date.getTime());
        return date;
    }

    toString()  : string{
        return `
            Data: ${this._date},
            Quantidade: ${this.quantity},
            Valor: ${this.value},
            Volume: ${this.volume}
        `;
    }

}

