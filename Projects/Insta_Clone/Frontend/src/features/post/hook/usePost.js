import { useContext } from 'react';
import { getFeed } from '../services/post.api.js';
import { PostContext } from '../post.context.jsx';

export const usePost = () => {
  const context = useContext(PostContext);
  const { post, loading, setLoading, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    setFeed(data.posts);
    setLoading(false);
  };

  return {
    loading,
    feed,
    post,
    handleGetFeed,
  };
};
