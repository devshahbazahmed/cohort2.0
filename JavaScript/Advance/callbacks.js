// Closure
function countForMe() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}

let fn = countForMe();
fn();
fn();
fn();

let fn2 = countForMe();
fn2();
fn2();
fn2();
fn2();
fn2();
fn2();

// Encapsulation

function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Click: ${click} times`);
    } else {
      console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
    }
  };
}

let clickFn = clickLimiter();
clickFn();
clickFn();
clickFn();
clickFn();
clickFn();
clickFn();

// Callbacks

function abcd(fn) {
  fn(function (fn2) {
    fn2(function () {
      console.log("hye");
    });
  });
}

abcd(function (fn) {
  fn(function (fn3) {
    fn3();
  });
});

// EXERCISE-1:

function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time * 1000);
}

afterDelay(3, function () {
  console.log("Callback executed");
});

// EXERCISE-2:

function getUser(username, callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      username,
    };

    callback(user);
  }, 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = [
      "Post 1",
      "Post 2",
      "Post 3",
    ];

    callback(posts);
  }, 1000);
}

getUser("shahbaz", function (user) {
  console.log("Username: ", user.username);

  getUserPosts(user.id, function (posts) {
    console.log("Posts: ");
    console.log(posts);
  });
});

// EXRECISE-3:

function loginUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      username: "Shelly",
    };

    callback(user);
  }, 1000);
}

function fetchPermissions(userId, callback) {
  setTimeout(() => {
    const permissions = [
      "Permission 1",
      "Permission 2",
      "Permission 3",
    ];

    callback(permissions);
  }, 1000);
}

function loadDashboard(permissions, callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

loginUser(function (user) {
  console.log("Username: ", user.username);

  fetchPermissions(user.id, function (permissions) {
    console.log(permissions);

    loadDashboard(permissions, function () {
      console.log("Dashboard loaded");
    });
  });
});