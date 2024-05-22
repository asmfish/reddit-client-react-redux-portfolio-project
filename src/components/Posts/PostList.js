import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {

  if (posts.length !== 0) {
    return (
      <>
         {
            posts.map((post, idx) => {
              return <Post key={idx} post={post} />
            })
         }
      </>
    );
  }

  return (
    <h4 className='no-posts-found'>No posts found!</h4>
  );
}