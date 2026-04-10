import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      {allUsers.map(({ name, email }, idx) => {
        return (
          <div key={idx}>
            <div className="bg-white text-black w-50 h-50 rounded-md flex justify-center items-center flex-col">
              <h1 className="font-bold text-3xl">{name}</h1>
              <h3 className="font-semibold text-xl">{email}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
