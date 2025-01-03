import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentThunk, fetchPostsThunk } from './newsSlice';
import styled from 'styled-components';
import { useState } from 'react';
import PostInfo from '../../ui/PostInfo';
import Comment from '../../ui/Comment';
import ButtonIcon from '../../ui/ButtonIcon';
import { MdOutlineScheduleSend, MdOutlineSend } from 'react-icons/md';

const StyledPostComponent = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px var(--color-grey-400);
    padding: 10px 15px;
`;

const StyledVisibilityButton = styled.span`
    font-size: 15px;
    color: var(--color-grey-500);
    cursor: pointer;
`;

const CommentsContainer = styled.div``;

const StyledCommentInput = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
    vertical-align: top;

    transition: all 0.3s ease;
`;

const StyledAddCommentForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
`;

function PostComponent({ postId }) {
    const [hideComments, setHideComments] = useState(false);

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);

    const handleChangeCommentsVisisble = (e) => {
        setHideComments(e);
    };

    const post = useSelector((state) =>
        state.news.posts.find((p) => p.id === postId)
    );

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmitComment = async (data) => {
        try {
            await dispatch(
                addCommentThunk({
                    postId: post.id,
                    content: data.comment,
                    authorId: currentUser.id,
                    authorName: currentUser.user_metadata.fullName,
                })
            ).unwrap();
            resetField('comment');
            dispatch(fetchPostsThunk());
        } catch (error) {
            console.log('error adding comment');
        }
    };

    if (!post) {
        return null;
    }

    return (
        <StyledPostComponent key={post.id}>
            <PostInfo post={post} />
            {hideComments ? (
                <div>
                    <StyledVisibilityButton
                        onClick={() => handleChangeCommentsVisisble(false)}
                    >
                        Hide Comments
                    </StyledVisibilityButton>
                    <CommentsContainer>
                        {post.comments.length >= 1 ? (
                            post.comments.map((comment, index) => (
                                <Comment key={index} comment={comment} />
                            ))
                        ) : (
                            <p>No comments yet</p>
                        )}

                        <StyledAddCommentForm
                            onSubmit={handleSubmit(onSubmitComment)}
                        >
                            <StyledCommentInput
                                type="text"
                                placeholder="Add a comment"
                                {...register('comment', {
                                    required: 'You cant add empty comment',
                                })}
                            />

                            <ButtonIcon type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <MdOutlineScheduleSend />
                                ) : (
                                    <MdOutlineSend />
                                )}
                            </ButtonIcon>
                        </StyledAddCommentForm>
                    </CommentsContainer>
                </div>
            ) : (
                <StyledVisibilityButton
                    onClick={() => handleChangeCommentsVisisble(true)}
                >{`Show comments(${post.comments.length})`}</StyledVisibilityButton>
            )}
        </StyledPostComponent>
    );
}

export default PostComponent;
