import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { addPostThunk, fetchPostsThunk } from './newsSlice';

function CreatePost() {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.user);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const handleAddPost = (data) => {
        dispatch(
            addPostThunk({
                title: data.title,
                content: data.content,
                authorId: currentUser.id,
                authorName: currentUser.user_metadata.fullName,
            })
        );
        reset();
        dispatch(fetchPostsThunk());
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddPost)}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', {
                            required: 'Title is required',
                        })}
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <textarea
                        placeholder="Content"
                        {...register('content', {
                            required: 'Content is required',
                        })}
                    />
                    {errors.content && <p>{errors.content.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding post...' : 'Add Post'}
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
