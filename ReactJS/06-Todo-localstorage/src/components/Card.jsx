const Card = ({ user, deleteHandler, idx }) => {
  return (
    <div className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black">
      <img
        src={user.imageURL}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover object-center"
      />
      <h1 className="mt-3 font-bold text-2xl text-center">{user.name}</h1>
      <h3 className="mt-3 font-semibold text-xl text-center text-blue-600">
        {user.role}
      </h3>
      <p className="mt-2 font-medium leading-tight text-md text-center text-gray-800">
        {user.description}
      </p>
      <button
        onClick={() => {
          deleteHandler(idx);
        }}
        className="bg-red-600 text-white mt-5 border-none rounded-lg px-5 py-3 hover:cursor-pointer active:scale-95 font-semibold text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
