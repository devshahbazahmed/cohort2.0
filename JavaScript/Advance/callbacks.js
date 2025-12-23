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