const Card = ({ postData, like, dislike }) => {
  return (
    <div className="w-full flex gap-10">
      {postData.map((post) => {
        return (
          <div
            className="card flex flex-col justify-center items-center w-70 h-70 bg-zinc-600 rounded-md text-center"
            key={post.id}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile-pic"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h1>{post.name}</h1>
            <p>{post.role}</p>
            <p>Like Count: {post.likeCount}</p>
            <div className="w-full flex gap-3 items-center justify-center mt-2">
              <button
                onClick={() => like(post.id)}
                className="px-8 py-3 bg-blue-600 rounded-md hover:cursor-pointer active:scale-105"
              >
                Like
              </button>
              <button
                onClick={() => dislike(post.id)}
                className="px-8 py-3 bg-red-600 rounded-md hover:cursor-pointer active:scale-105"
              >
                Dislike
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
