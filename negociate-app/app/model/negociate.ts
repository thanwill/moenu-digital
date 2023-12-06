export class Negociate {

    constructor(
        private _data: Date,
        private _quantity: number,
        private _value: number
    ) {}
    
    get data() : Date {
        return this._data;
    }

    get quantity() : number {
        return this._quantity;
    }

    get value() : number {
        return this._value;
    }

    get volume(): number {
        return this._quantity * this._value;
    }


    toString()  : string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantity},
            Valor: ${this.value},
            Volume: ${this.volume}
        `;
    }

}

