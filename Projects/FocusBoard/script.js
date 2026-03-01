function openFeatures() {
  const allElems = document.querySelectorAll(".elem");
  const fullElemPage = document.querySelectorAll(".full-elem");
  const allFullElemsBackButton = document.querySelectorAll(".full-elem .back");

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
    if (!taskInput.value || !taskDetailsInput.value) return;

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

function pomodoroTimer() {
  const timer = document.querySelector(".pomo-timer h1");
  const startBtn = document.querySelector(".pomo-timer .start-timer");
  const pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  const resetBtn = document.querySelector(".pomo-timer .reset-timer");
  const session = document.querySelector(".pomodoro-timer-fullpage .session");

  let timerInterval = null;
  let totalSeconds = 25 * 60;
  let isWorkSession = true;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function startTimer() {
    clearInterval(timerInterval);
    if (isWorkSession) {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          timer.innerHTML = "05:00";
          session.innerHTML = "Take a Break";
          session.style.backgroundColor = "var(--blue)";
          totalSeconds = 5 * 60;
        }
      }, 1000);
    } else {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
          session.style.backgroundColor = "var(--green)";
          totalSeconds = 25 * 60;
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    updateTimer();
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();

function timeAndWeatherDisplay() {
  const API_KEY = "";
  let city = "Mumbai";

  const weatherInTemp = document.querySelector(".header2 h2");
  const weatherCondition = document.querySelector(".header2 h4");
  const heatIndex = document.querySelector(".header2 .heatIndex");
  const humidity = document.querySelector(".header2 .humidity");
  const wind = document.querySelector(".header2 .wind");
  const locationName = document.querySelector(".header1 h4");
  const currentDate = document.querySelector(".header1 h2");
  const currentTimeAndDay = document.querySelector(".header1 h1");

  async function getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );
    const data = await response.json();

    weatherInTemp.innerHTML = `${data.current.temp_c.toFixed(1)}°C`;
    weatherCondition.innerHTML = `${data.current.condition.text}`;

    heatIndex.innerHTML = `Heat-Index: ${data.current.heatindex_c}%`;
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
    locationName.innerHTML = `${data.location.name}, ${data.location.country}`;
  }

  getWeather();

  function getDateAndTime() {
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const allMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();

    const todayDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    let hours = String(date.getHours() % 12).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = date.getHours() % 12 > 12 ? "am" : "pm";

    currentDate.innerHTML = `${String(todayDate).padStart(2, "0")} ${allMonths[month]}, ${year}`;

    currentTimeAndDay.innerHTML = `${weekDays[date.getDay()]}, ${hours}:${minutes}:${seconds} ${ampm}`;
  }

  setInterval(() => {
    getDateAndTime();
  }, 1000);
}

timeAndWeatherDisplay();

function changeTheme() {
  const themeBtn = document.querySelector(".theme");
  const rootElement = document.documentElement;
  let flag = false;

  themeBtn.addEventListener("click", function () {
    if (flag) {
      rootElement.style.setProperty("--primary", "#00ADB5");
      rootElement.style.setProperty("--secondary", "#393E46");
      rootElement.style.setProperty("--tertiary", "#EEEEEE");
      rootElement.style.setProperty("--base", "#222831");
      flag = false;
    } else {
      rootElement.style.setProperty("--primary", "#f9f7f7");
      rootElement.style.setProperty("--secondary", "#112d4e");
      rootElement.style.setProperty("--tertiary", "#dbe2ef");
      rootElement.style.setProperty("--base", "#3f72af");
      flag = true;
    }
  });
}

changeTheme();

function dailyGoals() {
  const goalInput = document.querySelector(".goal-input");
  const goalDetails = document.querySelector(".goal-details");
  const addGoalBtn = document.querySelector(".add-goal-btn");
  const goalsForm = document.querySelector(".add-daily-goals form");

  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  goals = goals.map((goal) => ({
    ...goal,
    completed: goal.completed || false,
  }));

  function renderGoals() {
    const allGoals = document.querySelector(".all-goals");
    let sum = "";
    goals.forEach((goal, idx) => {
      sum += `<div class="new-goal">
        <h2 class="goal-title ${goal.completed ? "completed" : ""}">${goal.title}</h2>
        <p class="goal-desc ${goal.completed ? "completed" : ""}">
          ${goal.desc}
        </p>
        <div class="goal-btns" id=${idx}>
          <button class="delete-goal" id=${idx}>Delete</button>
          <button class="complete-goal" id=${idx}>${goal.completed ? "Undo" : "Complete"}</button>
        </div>
      </div>`;
    });

    allGoals.innerHTML = sum;
    localStorage.setItem("goals", JSON.stringify(goals));

    document.querySelectorAll(".delete-goal").forEach((btn) => {
      btn.addEventListener("click", function () {
        goals.splice(btn.id, 1);
        renderGoals();
      });
    });

    document.querySelectorAll(".complete-goal").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = Number(btn.dataset.id);

        if (!goals[id]) return;

        goals[id].completed = !goals[id].completed;

        renderGoals();
      });
    });
  }
  renderGoals();

  goalsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = goalInput.value;
    const desc = goalDetails.value;

    if (!title || !desc) return;

    goals.push({
      title,
      desc,
      completed: false,
    });

    localStorage.setItem("goals", JSON.stringify(goals));
    renderGoals();

    goalInput.value = "";
    goalDetails.value = "";
  });
}

dailyGoals();
