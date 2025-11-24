const heart = document.querySelector("#heart");
const image = document.querySelector("img");
let lastClick = 0;

image.addEventListener("click", function () {
  const now = Date.now();
  if (now - lastClick < 300) {
    heart.style.opacity = 1;
    heart.style.transform = `translate(-50%, -50%) scale(1) rotate(0deg)`;
    setTimeout(function () {
      heart.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)';
    }, 800);
    setTimeout(function () {
      heart.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
      heart.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    }, 1200);
  }
  lastClick = now;
});

