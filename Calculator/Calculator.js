function Calculator() {

    this._result = null;

    this.getLastResult = () => {
        console.log(`The last result is ${this._result}`); 
        return this._result;
    }
    this.sum = (a, b) => {
        this._result = a + b;
        console.log(`Sum of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
    this.minus = (a, b) => {
        this._result = a - b;
        console.log(`Subtraction of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
    this.multiple = (a, b) => {
        this._result = a * b;
        console.log(`Multiplication of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
    this.divide = (a, b) => {
        this._result = a / b;
        console.log(`Divide of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
        
}


module.exports = Calculator;