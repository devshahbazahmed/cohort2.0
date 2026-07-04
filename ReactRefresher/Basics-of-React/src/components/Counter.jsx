import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementBy1 = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementBy1 = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
  };
  const incrementBy5 = () => {
    setCounter((prev) => prev + 5);
  };
  return (
    <div className="">
      <h1 className="px-3 text-5xl">{counter}</h1>
      <div className="flex gap-10 mt-10 ml-4 text-xl">
        <button
          onClick={incrementBy1}
          className="bg-blue-800 px-5 py-2 rounded-md hover:cursor-pointer active:scale-105"
        >
          IncrementBy1
        </button>
        <button
          onClick={incrementBy5}
          className="bg-green-800 px-5 py-2 rounded-md hover:cursor-pointer active:scale-105"
        >
          IncrementBy5
        </button>
        <button
          onClick={decrementBy1}
          className="bg-red-800 px-5 py-2 rounded-md hover:cursor-pointer active:scale-105"
        >
          DecrementBy1
        </button>
      </div>
    </div>
  );
};

export default Counter;
