import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (comments) {
    return (
      <div className='subreddit-item'>
         {
            comments.map((comm, idx) => {
              return <Comment key={idx} comment={comm} />
            })
         }
      </div>
    );
  }
  return null;
}