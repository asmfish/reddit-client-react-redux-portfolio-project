import { createAsyncThunk } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

 /*
     {
        display_name: Home
        url: /r/Home
     }
     {
        display_name: AskReddit,
        url: /r/AskReddit
     }
   */
export const getSubredditsAPI = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        //console.log('LoadSubreddits API')
        const json = await response.json();
        
        return json.data.children.map((subreddit) => subreddit.data );
    }
);

/*{
    author: jo_jo_nyeb, 
    thumbnail: nsfw, 
    title: not everything is photoshop, 
    subredit: LivestreamFail, 
    permalink: /r/LivestreamFail/comments/1cv1hl1/not_everything_is_photoshop/,
    score: 738
}*/
//we use subredits url to fetch posts
export const getSubredditPostsAPI = createAsyncThunk(
    'posts/loadPosts',
    async (subreddit) => {
        const response = await fetch(`${API_ROOT}${subreddit}.json`);
        //console.log('LoadPosts API')
        const json = await response.json();

        return json.data.children.map((post) => { 
            return post.data 
        });
    }
);

/**
 {
    author, 
    body
 }
 */
//we use post index and post permalink to fetch comments
export const getPostCommentsAPI = createAsyncThunk(
    'posts/loadComments',
    async (permalink) => {
        console.log('OO:', permalink);
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        //console.log('LoadComments API')
        const json = await response.json();

        return json[1].data.children.map((subreddit) => {
            return subreddit.data //author, body
        });
    }
);

