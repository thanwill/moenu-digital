export class Negociate {

    // private
    private _data: Date;
    private _value: number; 
    private _quantity: number;

    constructor(data:Date, quantity: number, value: number) {
        this._data = data;
        this._quantity = quantity;
        this._value = value;
    }

    get data() {
        return this._data;
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._quantity * this._value;
    }

    toString() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantity},
            Valor: ${this.value},
            Volume: ${this.volume}
        `;
    }

}

