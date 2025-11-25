const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerHTML === "Add Friend") {
      button.innerHTML = "Remove Friend";
    } else {
      button.innerHTML = "Add Friend";
    }
  });
});