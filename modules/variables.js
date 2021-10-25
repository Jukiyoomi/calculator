const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const cancelAllBtn = document.querySelector('.cancel-all')
const cancelBtn = document.querySelector('.cancel')

const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')


export {
    numberBtns,
    operationBtns,
    equalsBtn,
    cancelAllBtn,cancelBtn,
    previousOperand,
    currentOperand
}