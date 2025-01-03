import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from './newsSlice';
import PostComponent from './PostComponent';
import styled from 'styled-components';

const StyledPostsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;
    height: 100%;
    max-height: 50rem;
    overflow-y: auto;
    padding: 2rem;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
`;

function PostList() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.news);

    useEffect(() => {
        try {
            dispatch(fetchPostsThunk());
        } catch (error) {
            console.log(`error fetch posts`);
        }
    }, [dispatch]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;
    if (posts.length === 0) return <p>No one Posts</p>;

    return (
        <StyledPostsList>
            {posts.map((post) => (
                <PostComponent key={post.id} postId={post.id} />
            ))}
        </StyledPostsList>
    );
}

export default PostList;
