import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const data = await axios.get('https://picsum.photos/v2/list', {
      params: {
        page: page,
        limit: 10,
      },
    });
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="w-full h-screen bg-black text-white p-5">
      {/* <button
        onClick={getData}
        className="py-3 px-8 rounded-md bg-blue-700 hover:cursor-pointer active:scale-95"
      >
        Get data
      </button> */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-5">
        {data.map((item) => (
          <div
            className="w-60 h-60 bg-gray-800 rounded-md flex items-center justify-center flex-col gap-3"
            key={item.id}
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-30 h-30 rounded-full"
            />
            <h1>{item.author}</h1>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 mt-4">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="py-3 px-8 rounded-md bg-blue-700 hover:cursor-pointer active:scale-95"
        >
          Next
        </button>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="py-3 px-8 rounded-md bg-blue-700 hover:cursor-pointer active:scale-95"
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default App;
