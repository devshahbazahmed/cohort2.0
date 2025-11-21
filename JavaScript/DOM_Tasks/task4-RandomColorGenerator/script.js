const button = document.querySelector("button");
const main = document.querySelector("main");

button.addEventListener("click", () => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  let rot = Math.floor(Math.random() * 360);

  let div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  div.style.position = "absolute";
  div.style.left = `${x}%`;
  div.style.top = `${y}%`;
  div.style.rotate = `${rot}deg`;

  main.appendChild(div);
});