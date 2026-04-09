import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const influencers = [
    {
      id: 1,
      username: "amanda_nash",
      fullName: "Amanda Nash",
      category: "Lifestyle coach and photographer",
      bio: "Delivering best images online",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      posts: [
        "https://picsum.photos/300/200?1",
        "https://picsum.photos/300/200?2",
        "https://picsum.photos/300/200?3",
      ],
      stats: {
        media: 37,
        followers: 241000,
        following: 231,
      },
    },
    {
      id: 2,
      username: "robert_ford",
      fullName: "Robert F. Ford",
      category: "Lifestyle coach and photographer",
      bio: "Delivering best images online",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      posts: [
        "https://picsum.photos/300/200?4",
        "https://picsum.photos/300/200?5",
        "https://picsum.photos/300/200?6",
      ],
      stats: {
        media: 1200,
        followers: 489200,
        following: 987,
      },
    },
    {
      id: 3,
      username: "camcamcam",
      fullName: "Cameron Schmidt",
      category: "Lifestyle coach and photographer",
      bio: "Delivering best images online",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      posts: [
        "https://picsum.photos/300/200?7",
        "https://picsum.photos/300/200?8",
        "https://picsum.photos/300/200?9",
      ],
      stats: {
        media: 1200,
        followers: 489200,
        following: 987,
      },
    },
    {
      id: 4,
      username: "amanda_nash_2",
      fullName: "Amanda Nash",
      category: "Lifestyle coach and photographer",
      bio: "Delivering best images online",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      posts: [
        "https://picsum.photos/300/200?10",
        "https://picsum.photos/300/200?11",
        "https://picsum.photos/300/200?12",
      ],
      stats: {
        media: 37,
        followers: 241000,
        following: 231,
      },
    },
  ];

  return (
    <main className="bg-black p-10 text-white w-full h-full flex justify-center items-center flex-wrap gap-10">
      {influencers.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </main>
  );
};

export default App;
