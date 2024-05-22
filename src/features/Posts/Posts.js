import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubredditPostsAPI } from '../../api/reddit-api';
import { selectPosts, postsLoading } from './postsSlice';
import PostList from '../../components/Posts/PostList';
import { selectFilteredPosts } from './postsSlice';
import './Posts.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loadingPosts = useSelector(postsLoading);
  const posts1 = useSelector((state) => state.posts);
  const { searchTerm, selectedSubreddit } = posts1;
  const filteredPosts = useSelector(state => selectFilteredPosts(searchTerm)(state));

  useEffect(() =>{
     dispatch(getSubredditPostsAPI(selectedSubreddit));
  }, [selectedSubreddit]);

  return (
    <div className='posts-container'>
      <h3 className='post-title'>Posts: {selectedSubreddit}</h3>
      {
        loadingPosts ?
        <Skeleton count={5} className='skeleton-posts'/>
        :
        <PostList posts={ searchTerm && searchTerm !== '' ? filteredPosts : posts } />
      }
    
    </div>
  );
};

export default Posts;
