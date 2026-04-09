import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    console.log(count);
    setCount(count + 1);
  }
  function decreaseCount() {
    console.log(count);
    setCount(count - 1);
  }
  function jumpBy5() {
    console.log(count);
    setCount(count + 5);
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-8xl font-extrabold">{count}</h1>
      <div>
        <button
          className="bg-amber-950 px-2 py-1 rounded-md hover:cursor-pointer active:scale-95 text-xl"
          onClick={increaseCount}
        >
          Increase
        </button>
        <button
          className="bg-amber-950 px-2 py-1 rounded-md hover:cursor-pointer active:scale-95 text-xl"
          onClick={decreaseCount}
        >
          Decrease
        </button>
        <button
          className="bg-amber-950 px-2 py-1 rounded-md hover:cursor-pointer active:scale-95 text-xl"
          onClick={jumpBy5}
        >
          Jump By 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
