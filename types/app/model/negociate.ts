export class Negociate {

    // private
    #data;
    #quantity;
    #value; 

    constructor(data, quantity, value) {
        this.#data = data;
        this.#quantity = quantity;
        this.#value = value;
    }

    get data() {
        return this.#data;
    }

    get quantity() {
        return this.#quantity;
    }

    get value() {
        return this.#value;
    }

    get volume() {
        return this.#quantity * this.#value;
    }

    toString() {
        return `
            Data: ${this.#data},
            Quantidade: ${this.#quantity},
            Valor: ${this.#value},
            Volume: ${this.volume}
        `;
    }

}

