let input = document.querySelector("input");
let button = document.querySelector("button");

let hint = document.querySelector("#hint");
let count = document.querySelector("#count");
let counter = 0;

const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

button.addEventListener("click", () => {
  let inputValue = parseInt(input.value);
  if (randomNumber === inputValue) {
    hint.innerHTML = "Number is correct";
  } else if (randomNumber < inputValue) {
    hint.innerHTML = "input value is greater than random number";
  } else {
    hint.innerHTML = "input value is less than random number";
  }
  counter++;
  count.innerHTML = `attempt ${counter}`;
});
