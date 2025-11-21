const button = document.querySelector("button");
const main = document.querySelector("main");

const quotes = [
  "Stay hungry, stay foolish.",
  "Dream big, start small.",
  "Progress is better than perfection.",
  "Do it with passion or not at all.",
  "Small steps lead to big changes.",
  "Focus on the process, not the outcome.",
  "Discipline beats motivation.",
  "Your vibe attracts your tribe.",
  "Consistency creates miracles.",
  "Be the energy you want to attract."
];

button.addEventListener("click", () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  console.log(randomQuote);

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let rot = Math.floor(Math.random() * 360);
  let size = Math.floor(Math.random() * 3);

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let para = document.createElement("p");

  para.innerHTML = quotes[randomQuote];
  para.style.color = `rgb(${c1}, ${c2}, ${c3})`;
  para.style.position = "absolute";
  para.style.left = `${x}%`;
  para.style.top = `${y}%`;
  para.style.rotate = `${rot}deg`;
  para.style.fontSize = `${size}rem`;
  para.style.overflow = "nowrap";

  main.appendChild(para);
});