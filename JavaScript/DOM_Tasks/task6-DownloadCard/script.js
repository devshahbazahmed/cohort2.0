const downloadBar = document.querySelector(".inner");
const button = document.querySelector("#downloadBtn");
const percent = document.querySelector("#percent");
const estimate = document.querySelector("#estimate");
let percentage = 0;

button.addEventListener("click", function () {
  button.style.pointerEvents = "none";

  // setInterval(function () {
  //   if (percentage < 100) {
  //     percentage++;
  //     percent.innerHTML = `${percentage}%`;
  //     downloadBar.style.width = `${percentage}%`;
  //     button.disabled = true;
  //     button.style.cursor = "not-allowed";
  //     button.style.opacity = 0.6;
  //     button.style.pointerEvents = "none";
  //     button.style.backgroundColor = "lightgreen";
  //     button.style.color = "black";
  //   } else if (percentage === 100) {
  //     button.innerHTML = "Downloaded";
  //   }
  // }, 100);

  let num = 50 + Math.floor(Math.random() * 50);

  estimate.innerHTML = `Your file will be downloaded in <span style="color: blue;">${num / 10}</span> seconds`;


  let timer = setInterval(function () {
    percentage++;
    percent.innerHTML = `${percentage}%`;
    downloadBar.style.width = `${percentage}%`;
  }, num);


  setTimeout(function () {
    clearTimeout(timer);
    button.innerHTML = "Downloaded";
    button.style.backgroundColor = "lightgreen";
    button.style.color = "black";
    button.disabled = true;
    button.style.cursor = "not-allowed";
    button.style.opacity = 0.6;
    estimate.innerHTML = `Downloaded in <span style="color: blue;">${num / 10}</span> seconds`;
  }, num * 100);


});