import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:3000/api/notes');
    console.log(response.data.notes);
    setNotes(response.data.notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    axios
      .post('http://localhost:3000/api/notes', {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });

    title.value = '';
    description.value = '';
  }

  function handleDelete(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  function handleUpdate(noteId, description) {
    axios
      .patch(`http://localhost:3000/api/notes/${noteId}`, { description })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  return (
    <>
      <form className="note-action-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Enter title" name="title" />
        <input type="text" placeholder="Enter description" name="description" />
        <button>Add Note</button>
      </form>
      <div className="container">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="card">
              <h1 className="note-title">{note.title}</h1>
              <p className="note-desc">{note.description}</p>
              <div className="action-btns">
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(note._id, note.description)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
