let string = "";
let buttons = document.querySelectorAll('.button');
Array.from (buttons).forEach ((button)=>{
    button.addEventListener('click', (e)=>{
        consol.log (e.target)
    })
})