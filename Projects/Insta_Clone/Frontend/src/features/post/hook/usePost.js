import { useContext, useEffect } from 'react';
import {
  createPost,
  getFeed,
  likePost,
  unlikePost,
} from '../services/post.api.js';
import { PostContext } from '../post.context.jsx';

export const usePost = () => {
  const context = useContext(PostContext);
  const { post, loading, setLoading, feed, setFeed } = context;

  const handleGetFeed = async () => {
    try {
      setLoading(true);
      const data = await getFeed();
      setFeed(data.posts.reverse());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (imageFile, caption) => {
    try {
      setLoading(true);
      const data = await createPost(imageFile, caption);
      setFeed([data.post, ...feed]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    const data = await likePost(postId);
    await handleGetFeed();
  };

  const handleUnLike = async (postId) => {
    const data = await unlikePost(postId);
    await handleGetFeed();
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    feed,
    post,
    handleGetFeed,
    handleCreatePost,
    handleLike,
    handleUnLike,
  };
};
