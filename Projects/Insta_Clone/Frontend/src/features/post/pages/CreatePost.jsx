import { useRef, useState } from 'react';
import '../styles/createpost.scss';
import { usePost } from '../hook/usePost';
import { useNavigate } from 'react-router';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const postImageInputFieldRef = useRef(null);

  const { loading, handleCreatePost } = usePost();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const file = postImageInputFieldRef.current.files[0];

    if (!file) return;

    await handleCreatePost(file, caption);
    navigate('/');
  }

  if (loading) {
    return (
      <main>
        <h1>Creating Post...</h1>
      </main>
    );
  }
  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="postImage" className="post-image-label">
            Select Image
          </label>
          <input
            ref={postImageInputFieldRef}
            hidden
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button className="button primary-button">Create Post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
