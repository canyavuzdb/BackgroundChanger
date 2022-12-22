const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
"black",
"yellow",
"green",
"red",
"purple",
"orange",
"brown",
"blue",

];

button.addEventListener("click", changeBackgrpund);

let order = 0;
function changeBackgrpund(){
  // random color 
  // const randomNum = Math.floor(Math.random() * colors.length);
  // const choosenColor = colors[randomNum];
  // body.style.backgroundColor = choosenColor;
  // with order
  console.log(order);
  if(order === colors.length) order = 0;
  const choosenColor = colors[order];
  order++;
  body.style.backgroundColor = choosenColor;
}