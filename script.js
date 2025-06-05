let string ="";
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
          string = eval(string);
          document.querySelector("input").value = string;
        } 
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }) 
}) else if (value==="AC") {
  string = "";
  document.querySelector('input').value ="";
} else if (value === "DEL") {
  string
}

