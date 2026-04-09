import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white text-black p-6 text-center rounded-xl">
      <div id="images" className="flex justify-center items-center gap-2">
        {item.posts.map((url, idx) => {
          <img
            key={idx}
            src={url}
            alt="post"
            className="w-1/3 h-20 object-cover rounded-lg"
          />;
        })}
      </div>
      <div id="profile" className="flex justify-center items-center">
        <img
          src={item.avatar}
          alt={item.username}
          className="rounded-[50%] w-20 h-20 mt-[-10px]"
        />
      </div>
      <p className="mt-3 font-bold text-xl">{item.username}</p>
      <p className="mt-1 font-semibold text-lg text-gray-600">
        {item.fullName}
      </p>

      <p className="mt-1 font-medium text-lg text-gray-700">{item.category}</p>
      <p className="mt-1 mb-3 font-medium text-lg text-gray-700">{item.bio}</p>
      <hr className="w-20 ml-40 text-center flex justify-center items-center text-gray-800" />
      <div
        id="details"
        className="flex justify-center items-center gap-10 mt-3"
      >
        <div className="flex justify-center items-center flex-col">
          <p className="font-bold text-lg">{item.stats.media}</p>
          <p className="font-medium text-md">Media</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-bold text-lg">
            {item.stats.followers > 1000
              ? `${item.stats.followers / 1000}k`
              : item.stats.followers}
          </p>
          <p className="font-medium text-md">Followers</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-bold text-lg">{item.stats.following}</p>
          <p className="font-medium text-md">Following</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
