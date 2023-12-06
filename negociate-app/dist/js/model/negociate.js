export class Negociate {
    constructor(_data, _quantity, _value) {
        this._data = _data;
        this._quantity = _quantity;
        this._value = _value;
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
