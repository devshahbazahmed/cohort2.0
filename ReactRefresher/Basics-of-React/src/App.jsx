import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [postData, setPostData] = useState([
    {
      id: 1,
      name: 'Ritik',
      role: 'SDE',
      likeCount: 0,
    },
    { id: 2, name: 'Shiv', role: 'Forward Engg', likeCount: 20 },
  ]);

  const like = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likeCount: item.likeCount + 1 } : item
      )
    );
  };

  const dislike = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id && item.likeCount > 0
          ? { ...item, likeCount: item.likeCount - 1 }
          : item
      )
    );
  };
  return (
    <div className="px-10 py-5">
      <Card postData={postData} like={like} dislike={dislike} />
    </div>
  );
};

export default App;
