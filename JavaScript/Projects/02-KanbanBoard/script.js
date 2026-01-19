let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [todo, progress, done];
let dragElement = null;

function addTask(title, description, column) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const deleteButton = document.createElement("button");

  div.classList.add("task");
  div.setAttribute("draggable", true);

  deleteButton.innerHTML = "Delete";
  h2.innerHTML = title;
  p.innerHTML = description;

  deleteButton.addEventListener("click", () => {
    div.remove();
    updateTaskCount();
  });

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(deleteButton);

  column.appendChild(div);
  div.addEventListener("drag", (e) => {
    dragElement = div;
  });

  return div;
}

function updateTaskCount() {
  columns.forEach(col => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    tasksData[col.id] = Array.from(tasks).map(t => {
      return {
        title: t.querySelector("h2").innerText,
        description: t.querySelector("p").innerText,
      };
    });

    localStorage.setItem("tasks", JSON.stringify(tasksData));

    count.innerText = tasks.length;
  });
}

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const column = document.querySelector(`#${col}`);
    data[col].forEach(task => {
      addTask(task.title, task.description, column);
    });
  }
  updateTaskCount();
}

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
  task.addEventListener("drag", (e) => {
    // console.log("dradding", e);
    dragElement = task;
  });
});

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(dragElement);
    column.classList.remove("hover-over");


    updateTaskCount();

  });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related logic

const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {
  const taskTitle = document.querySelector("#task-title-input").value;
  const taskDescription = document.querySelector("#task-description").value;

  addTask(taskTitle, taskDescription, todo);

  updateTaskCount();

  modal.classList.remove("active");

  document.querySelector("#task-title-input").value = "";
  document.querySelector("#task-description").value = "";
});