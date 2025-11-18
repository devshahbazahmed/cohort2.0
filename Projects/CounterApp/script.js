let count = 0;
let h3 = document.querySelector("h3");
h3.innerHTML = count;
let plusButton = document.querySelector("#plusButton");
let minusButton = document.querySelector("#minusButton");

plusButton.addEventListener("click", () => {
  count++;
  h3.innerHTML = count;
});

minusButton.addEventListener("click", () => {
  count--;
  if (count < 0) count = 0;
  h3.innerHTML = count;
});