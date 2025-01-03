import styled from 'styled-components';

const StyledComment = styled.div`
    line-height: 1.2;
    margin: 5px;
`;

const StyledAuthorName = styled.strong`
    color: var(--color-brand-700);
    font-size: 13px;
    font-weight: 800;
`;
const StyledText = styled.span`
    font-size: 13px;
    color: var(--color-grey-800);
`;

function Comment({ comment, index }) {
    return (
        <StyledComment key={comment.id || index}>
            <StyledAuthorName>{comment.author_name}</StyledAuthorName>
            <StyledText>: {comment.content}</StyledText>
        </StyledComment>
    );
}

export default Comment;
