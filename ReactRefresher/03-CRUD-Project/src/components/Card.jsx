const Card = ({ postData, deletePost, setEdit, setTitle, setDesc }) => {
  return (
    <div className="w-full flex gap-10">
      {postData.map((item, idx) => (
        <div
          className="card flex flex-col justify-center items-center w-70 h-70 bg-zinc-600 rounded-md text-center"
          key={idx}
        >
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <div className="buttons flex items-center justify-center gap-5 mt-6">
            <button
              onClick={() => {
                setTitle(item.title);
                setDesc(item.desc);
                setEdit(idx);
              }}
              className="bg-green-700 text-white px-5 py-2 rounded-md hover:cursor-pointer active:scale-95"
            >
              Edit Post
            </button>
            <button
              onClick={() => deletePost(idx)}
              className="bg-red-700 text-white px-5 py-2 rounded-md hover:cursor-pointer active:scale-95"
            >
              Delete Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
