function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "text-white bg-gray-800" : "text-black bg-gray-100"} px-6 py-4 rounded-md pointer-events-none shadow-md`;

    if (config.positionX !== "left" || config.positionY !== "top") {
      document.querySelector(".parent").className += ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    document.querySelector(".parent").appendChild(div);

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  duration: 3,
  theme: "dark",
});

toaster("Download Completed!");

setTimeout(() => {
  toaster("Friend sent you a request!");
}, 2000);