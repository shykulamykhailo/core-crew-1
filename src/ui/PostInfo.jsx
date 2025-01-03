import styled from 'styled-components';

const StyledPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-brand-700);
    border-radius: 5px;
    padding: 1rem;

    h6 {
        color: var(--color-brand-700);
    }

    p {
        font-size: 17px;
        background-color: var(--color-brand-50);
        margin: 5px 0;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;

function PostInfo({ post }) {
    return (
        <StyledPostInfo>
            <h6>{post.author_name}</h6>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </StyledPostInfo>
    );
}

export default PostInfo;
