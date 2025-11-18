let count = document.querySelector("p");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counter = 0;

increase.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;

});

decrease.addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = 0;
  count.innerHTML = counter;
});