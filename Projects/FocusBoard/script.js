function openFeatures() {
  const allElems = document.querySelectorAll(".elem");
  const fullElemPage = document.querySelectorAll(".full-elem");
  const allFullElemsBackButton = document.querySelectorAll(".full-elem  .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", () => {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  allFullElemsBackButton.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}

openFeatures();

let currentTasks = [
  {
    task: "BreakFast",
    details: "Eat Breakfast",
    imp: true,
  },
  {
    task: "Record Reel",
    details: "Record Reel",
    imp: true,
  },
  {
    task: "Lunch",
    details: "Eat Lunch",
    imp: false,
  },
];

const taskForm = document.querySelector(".add-task form");
const taskInput = document.querySelector(".add-task form input");
const taskDetailsInput = document.querySelector(".add-task form textarea");
const taskCheckBox = document.querySelector("#checkbox");
const taskButton = document.querySelector(".add-task form button");

function renderTask() {
  let allTasks = document.querySelector(".all-tasks");

  let sum = "";

  currentTasks.forEach(function (elem) {
    sum += `<div class="task">
            <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
            <button>Mark as completed</button>
          </div>`;
  });

  allTasks.innerHTML = sum;
}
renderTask();

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  currentTasks.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckBox.checked,
  });

  console.log(currentTasks);
  renderTask();
});
