import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [count, setCount] = useState(0);
  const [postData, setPostData] = useState([
    {
      name: 'Ritik',
      role: 'SDE',
      likeCount: 0,
    },
    {
      name: 'Shiv',
      role: 'Forward Engg',
      likeCount: 20,
    },
  ]);

  const like = () => {
    setCount(count + 1);
  };
  return (
    <div className="px-10 py-5">
      <Card postData={postData} like={like} count={count} />
    </div>
  );
};

export default App;
