const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.button');

let currentInput= '';
let previousOperand = '';
let operation = null;


//Add event listeners to buttons

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        const value = button.innerText;

        //clear all

        if(value ==='AC'){
            currentInput = '';
            previousOperand ='';
            operation = null;
            resultDisplay,value = '';
            
        }
    });
});