import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {
  
  if (posts) {
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
  return null;
}