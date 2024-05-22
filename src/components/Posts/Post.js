import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostCommentsAPI } from '../../api/reddit-api';
import moment from 'moment';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
} from 'react-icons/ti';
import { postCommentsLoading, selectPostComments } from '../../features/Posts/postsSlice';
import Comment from '../Comment/Comment';
import './Post.css';
import posterProfileImage from './user.png';
import numberFormatter from '../../util/numberFormatter'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Post({ post }) {
  const dispatch = useDispatch();
  const postComments = useSelector(selectPostComments);
  const commentsLoading = useSelector(postCommentsLoading);
  const [showComments, setShowComments] = useState(false);
  const [voteValue, setVoteValue] = useState(0);

  useEffect(() => {
    if(showComments){
        dispatch(getPostCommentsAPI(post.permalink));
    }
  }, [showComments]);

  const hadleOnVote = (value) => {
    voteValue === value ? setVoteValue(0) : setVoteValue(value);
  }

  return (
    <div className="post-container">
        <div className="post-header">
            <img
                src={posterProfileImage}
                alt={`${post.author} profile`}
                className="poster-profile-image"
            />
            <span className="post-author">{post.author}</span> . <span>{moment.unix(post.created_utc).fromNow()}</span>
        </div>
        <div>
            <h3 className="post-title">{post.title}</h3> 
        </div>
        {
           post.url?
           <div>
                <img src={post.url} alt="" className="post-image" />
           </div>
        : ''
        }
        <hr />
        <div className="post-menus-container">
            <div className='vote-buttons-container'> 
                <button
                    className={`up-vote ${voteValue === 1 && 'up-vote-active'}`}
                    onClick={() => hadleOnVote(1)}
                >
                    {voteValue === 1 ? <TiArrowUpThick className='vote-icon'/> : <TiArrowUpOutline className='vote-icon'/> }
                </button>
                <span className={`${voteValue === 1 && 'up-vote-active'} ${voteValue === -1 && 'down-vote-active'}`}>{numberFormatter(post.ups)}</span>
                <button
                    className={`down-vote ${voteValue === -1 && 'down-vote-active'}`}
                    onClick={() => hadleOnVote(-1)}
                >
                    {voteValue === -1 ?  <TiArrowDownThick className='vote-icon'/> : <TiArrowDownOutline className='vote-icon'/> }
                </button>
            </div> 
            <div className='show-comment'>
                <button className='comment-button' onClick={() => setShowComments(prev => !prev)}>
                    <TiMessage className='message-icon'/>
                    <span>{numberFormatter(post.num_comments)}</span>
                </button>
            </div>
        </div>
        <div className="post-comments-container">
        {
            showComments ?
            commentsLoading ? 
            <Skeleton count={5} className='skeleton-comments'/>
            :
            postComments.map((comm, idx) => {
              return <Comment key={idx} comment={comm} />
            })
            :
            ''
        }
        </div>
  </div>
  );
}