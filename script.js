import Calculator from "./modules/class.js";
import {numberBtns,operationBtns,equalsBtn,cancelAllBtn,cancelBtn,previousOperand,currentOperand} from "./modules/variables.js";


let calculator = new Calculator(previousOperand, currentOperand)

numberBtns.forEach(num => {
    num.addEventListener('click',() => {
        calculator.appendNumber(num.textContent)
        calculator.updateDisplay()
    })
})

operationBtns.forEach(ope => {
    ope.addEventListener('click',() => {
        calculator.chooseOperation(ope.textContent)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener('click',() => {
    calculator.compute()
    calculator.updateDisplay()
})

cancelAllBtn.addEventListener('click',() => {
    calculator.clear()
    calculator.updateDisplay()
})

cancelBtn.addEventListener('click',() => {
    calculator.delete()
    calculator.updateDisplay()
})