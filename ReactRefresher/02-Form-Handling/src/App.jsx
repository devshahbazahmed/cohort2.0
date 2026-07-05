import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [formData, setFormData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    const newFormData = [...formData];
    formData.push({
      name,
      age,
    });
    setFormData(newFormData);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="w-70 h-70 bg-gray-600 rounded-md flex flex-col items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-white rounded-md px-5 py-2 mt-3"
        />
        <input
          type="number"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-white rounded-md px-5 py-2 mt-3"
        />
        <button
          type="submit"
          className="cursor-pointer mt-3 bg-blue-600 text-white px-5 py-2 rounded-md active:scale-95"
        >
          Submit
        </button>
      </form>
      <div className="bg-red-500 text-white w-full ">
        {formData.map((user) => {
          return (
            <div className="w-60 h-60" key={user.name}>
              <h1>{user.name}</h1>
              <p>{user.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
