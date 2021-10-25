import {
    previousOperand,
    currentOperand
} from "./variables.js";


export default

class Calculator {
    constructor(previous, current) {
        this.previous = previous
        this.current = current
        this.clear()
    }

    clear() {
        this.previous = ''
        this.current = ''
        this.operation = undefined
    }

    delete() {
        this.current = this.current.toString().slice(0, -1)
    }

    appendNumber(number) {
        if(number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.current === '') return
        if(this.previous !== '' ) {this.compute()}
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previous)
        const curr = parseFloat(this.current)
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev * curr
                break;
            case '/':
                computation = prev / curr
                break;
        
            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ''
    }
    
    getDisplayNumber(number) {
        const float = parseFloat(number)
        if(isNaN(float)) return ''
        return float.toLocaleString('fr')
    }

    updateDisplay() {
        currentOperand.textContent = this.getDisplayNumber(this.current)

        if (!(this.operation == undefined)) {
            previousOperand.textContent = this.getDisplayNumber(this.previous) +' '  + this.operation
        } else {
            previousOperand.textContent = this.getDisplayNumber(this.previous)
        }
    }
}