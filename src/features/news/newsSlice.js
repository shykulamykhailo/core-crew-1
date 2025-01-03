import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    addComment,
    addPost,
    fetchPostsWithComments,
} from '../../services/apiNews';

export const fetchPostsThunk = createAsyncThunk('news/fetchPosts', async () => {
    const response = await fetchPostsWithComments();
    return response;
});

export const addPostThunk = createAsyncThunk(
    'news/addPost',
    async ({ title, content, authorId, authorName }) => {
        const newPost = await addPost(title, content, authorId, authorName);

        return newPost;
    }
);

export const addCommentThunk = createAsyncThunk(
    'news/addComment',
    async ({ postId, content, authorId, authorName }) => {
        const newComment = await addComment(
            postId,
            content,
            authorId,
            authorName
        );

        return { postId, newComment };
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPostThunk.fulfilled, (state, action) => {
                if (action.payload) {
                    state.posts = [action.payload, ...state.posts];
                }
            })
            .addCase(fetchPostsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPostsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addCommentThunk.fulfilled, (state, action) => {
                const { postId, newComment } = action.payload;
                const post = state.posts.find((p) => p.id === postId);
                if (post) {
                    post.comments.push(newComment);
                }
            });
    },
});

export default newsSlice.reducer;
