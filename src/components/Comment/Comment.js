import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';
import commentWriterImage from './message2.png';

export default function Comment({ comment }) {

  if (comment) {
    return (
      <div className='comment-item-container'>
        <div className='comment-item-header'>
            <img
                src={commentWriterImage}
                alt={`${comment.author} profile`}
                className="commentor-profile-image"
            />
            <span className='comment-author'>{comment.author}</span> . <span>{moment.unix(comment.created_utc).fromNow()}</span>
        </div>
        <ReactMarkdown>{comment.body}</ReactMarkdown>
      </div>
    );
  }
  return null;
}