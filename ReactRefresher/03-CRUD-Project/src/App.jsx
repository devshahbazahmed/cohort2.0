import { useState } from 'react';
import Card from './components/Card';
import { useEffect } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [edit, setEdit] = useState(null);
  const [postData, setPostData] = useState(
    JSON.parse(localStorage.getItem('formdata')) || []
  );

  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(postData));
  }, [postData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit !== null) {
      const copyData = [...postData];
      copyData[edit] = { title, desc };
      setPostData(copyData);
      setEdit(null);
    } else {
      const newData = [...postData];
      newData.push({
        title,
        desc,
      });
      setPostData(newData);
    }

    setTitle('');
    setDesc('');
  };

  const deletePost = (idx) => {
    const copyArr = [...postData];
    copyArr.splice(idx, 1);
    setPostData(copyArr);
  };

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center flex-col gap-10">
      <form className="w-70 h-70 bg-zinc-800 rounded-md flex flex-col items-center justify-center gap-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title"
          className="border border-white rounded-md px-5 py-2 outline-none"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter your post desc"
          className="border border-white rounded-md px-5 py-2 outline-none"
        />
        <button
          onClick={(e) => submitHandler(e)}
          className="bg-blue-700 text-white px-5 py-2 rounded-md hover:cursor-pointer active:scale-95"
        >
          {edit !== null ? 'Edit Post' : 'Create Post'}
        </button>
      </form>
      <div className="flex justify-center items-center gap-5">
        <Card
          postData={postData}
          deletePost={deletePost}
          setEdit={setEdit}
          setTitle={setTitle}
          setDesc={setDesc}
        />
      </div>
    </div>
  );
};

export default App;
