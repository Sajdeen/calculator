let string = "";
let buttons = document.querySelectorAll (".button");
let input = document.querySelector("input");


buttons.forEach((button) {
button.addEventListener("click", (e) => {
let value = e.target.innerHTML;

 
if (value === "=");{
  try{
string = eval(string);
input.value = string;
} catch {
   input.value = "Error";
  string = "";
}
} else if (value === "AC") {
 string="";
 input.value = string;

} else if (value === "DEL"){
 input.value = string;
} else{
  string += value;
  input.value = string;
}
});
});
