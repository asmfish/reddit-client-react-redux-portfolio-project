import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubredditsAPI } from '../../api/reddit-api';
import { selectSubreddits, isLoading } from './subredditsSlice';
import SubredditList from '../../components/Subreddits/SubredditList';
import './Subreddits.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const subRedditsLoading = useSelector(isLoading);

  useEffect(() =>{
     dispatch(getSubredditsAPI());
  }, []);
  
  return (
    <div className='subreddits-container'>
      <h3 className='subreddit-title'>Subreddits</h3>
      {
        subRedditsLoading ?
        <Skeleton count={4} className='skeleton-subreddits'/>
        :
        <SubredditList subreddits={subreddits} />
      }
    </div>
  );
};

export default Subreddits;
