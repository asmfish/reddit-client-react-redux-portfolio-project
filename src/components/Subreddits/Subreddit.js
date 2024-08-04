import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubreddit, selectSelectedSubreddit} from '../../features/Posts/postsSlice';
import noImageIcon from './no-image-icon.png';
import { useMediaQuery } from 'react-responsive';
import { toggleMenu } from '../../menuSlice';

export default function Subreddit({ subreddit }) {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const getSubredditPosts = (url) => {
    if(isMobile) {
      dispatch(toggleMenu());
    }

    dispatch(setSelectedSubreddit(url));
  }

  return (
      <div className="subreddit-item-container">
         <button
              type="button"
              onClick={() => getSubredditPosts(subreddit.url)}
              className={`${selectedSubreddit === subreddit.url && 'active-subreddit'}`}
            >

              <img
                src={
                  subreddit.icon_img && subreddit.icon_img !== '' ? subreddit.icon_img: noImageIcon
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              <span className='subreddit-title'>{subreddit.display_name}</span>
         </button>
      </div>
  );
}