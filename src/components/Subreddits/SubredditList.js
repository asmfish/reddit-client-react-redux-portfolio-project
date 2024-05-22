import React from 'react';
import Subreddit from './Subreddit';

export default function SubredditList({ subreddits }) {
  if (subreddits) {
    return (
      <div>
         {
            subreddits.map((subr, idx) => {
              return <Subreddit key={idx} subreddit={subr} />
            })
         }
      </div>
    );
  }
  return null;
}