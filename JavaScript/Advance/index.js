// this

// global -> window
console.log(this);

// function -> window
function abcd() {
  console.log(this);
}

abcd();


// es5 function inside object -> object
let person = {
  name: "Harsh",
  age: 25,
  address: function () {
    console.log(this);
  }
};

person.address();

//es6 function inside object -> window
let person2 = {
  name: "Harsh",
  age: 25,
  address: () => {
    console.log(this);
  }
};

person2.address();

// es5 function inside es5 function inside object -> window
let obj = {
  name: "Harsh",
  age: 25,
  address: function () {
    function defg() {
      console.log(this);
    }
    defg();
  }
};

obj.address();

// es6 function inside es5 function inside object -> object
let obj2 = {
  name: "Harsh",
  age: 25,
  address: function () {
    const efgh = () => {
      console.log(this);
    };
    efgh();
  }
};

obj2.address();

// call

let obj3 = {
  name: "Harsh",
};

function fnc1(a, b, c) {
  console.log(this, a, b, c);
}

fnc1.call(obj3, 1, 2, 3);

// apply

let obj4 = {
  name: "Harsh",
};

function fnc2(a, b, c) {
  console.log(this, a, b, c);
}

fnc2.apply(obj4, [1, 2, 3]);

// bind

let obj5 = {
  name: "Harsh",
};

function fnc3(a, b, c) {
  console.log(this, a, b, c);
}

const newFnc = fnc3.bind(obj5, 1, 2, 3);
newFnc();

