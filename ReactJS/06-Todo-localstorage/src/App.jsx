import { useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  console.log(localData);

  const [allUsers, setAllUsers] = useState(localData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = [...allUsers];
    oldData.push({
      name,
      imageURL,
      role,
      description,
    });

    setAllUsers(oldData);
    localStorage.setItem("all-users", JSON.stringify(oldData));

    setName("");
    setImageURL("");
    setRole("");
    setDescription("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    const conf = confirm("Do you really want to delete this user?");
    if (conf) {
      copyUsers.splice(idx, 1);
    } else {
      alert("Element not deleted");
    }

    setAllUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));
  };

  console.log(allUsers);
  return (
    <div className="bg-black h-screen text-white p-10">
      <form
        className="flex p-5 gap-6 justify-center items-center flex-wrap"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Enter name"
          className="border border-gray-600 px-5 py-2 text-lg font-semibold rounded-lg w-[40%]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter image-url"
          className="border w-[40%] border-gray-600 px-5 py-2 text-lg font-semibold rounded-lg"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter role"
          className="border w-[40%] border-gray-600 px-5 py-2 text-lg font-semibold rounded-lg"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="border w-[40%] border-gray-600 px-5 py-2 text-lg font-semibold rounded-lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="w-[82%] bg-green-400 text-white rounded-lg px-5 py-2 hover:cursor-pointer active:scale-95">
          Submit
        </button>
      </form>
      <div className="flex flex-wrap justify-center item-center gap-10 mt-20 w-[82%]">
        {allUsers.map((user, idx) => {
          return <Card user={user} key={idx} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
