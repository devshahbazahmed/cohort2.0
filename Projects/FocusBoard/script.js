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

function dailyPlanner() {
  const dayPlanner = document.querySelector(".day-planner");
  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  let wholeDaySum = "";
  let hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );

  hours.forEach(function (elem, idx) {
    let savedData = dayPlanData[idx] || "";
    wholeDaySum += `<div class="day-planner-time">
      <p>${elem}</p>
      <input id=${idx} type="text" placeholder="..." value=${savedData}>
    </div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  let dayPlanInput = document.querySelectorAll(".day-planner input");

  dayPlanInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();

function motivationalQuote() {
  const motivationalQuoteContent = document.querySelector(".motivation-2 h1");
  const motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random",
    );
    const json = await response.json();
    const data = await json.data;

    motivationalQuoteContent.innerHTML = data.content;
    motivationAuthor.innerHTML = `- ${data.author}`;
  }

  fetchQuote();
}

motivationalQuote();
