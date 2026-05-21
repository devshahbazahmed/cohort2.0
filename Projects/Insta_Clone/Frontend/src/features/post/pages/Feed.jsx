import { useEffect } from 'react';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import '../styles/feed.scss';
import Navbar from '../../shared/components/Navbar';

const Feed = () => {
  const { handleGetFeed, loading, feed, handleLike, handleUnLike } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  return (
    <main className="feed-page">
      <Navbar />
      <div className="feed">
        {feed.map((post) => {
          return (
            <div className="posts" key={post._id}>
              <Post
                user={post.user}
                post={post}
                handleLike={handleLike}
                handleUnLike={handleUnLike}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Feed;
