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

function todoList() {
  let currentTasks = JSON.parse(localStorage.getItem("currentTasks")) || [];

  const taskForm = document.querySelector(".add-task form");
  const taskInput = document.querySelector(".add-task form input");
  const taskDetailsInput = document.querySelector(".add-task form textarea");
  const taskCheckBox = document.querySelector("#checkbox");
  const taskButton = document.querySelector(".add-task form button");

  function renderTask() {
    let allTasks = document.querySelector(".all-tasks");

    let sum = "";

    currentTasks.forEach(function (elem, idx) {
      sum += `<div class="task">
              <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
              <button id=${idx}>Mark as completed</button>
            </div>`;
    });

    allTasks.innerHTML = sum;
    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTasks.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTasks.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckBox.checked,
    });

    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckBox.checked = false;
    renderTask();
  });
}

todoList();
