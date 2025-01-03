import { useForm } from 'react-hook-form';
import { updateUserAvatar } from '../../services/apiAuth';
import { loginSuccess } from './authSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import ButtonIcon from '../../ui/ButtonIcon';
import { MdCheck } from 'react-icons/md';

const StyledSettingForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 30px;
    border: solid 1px var(--color-grey-300);
    border-radius: 10px;
    box-shadow: var(--shadow-md);
`;

const InputContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const StyledInput = styled.input`
    display: flex;
    width: 85%;
    height: 2rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    &::-webkit-file-upload-button {
        font-size: 0.875rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    &::-ms-browse {
        padding: 0.2rem 0.5rem;

        background-color: var(--color-primary);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;

function UpdateUserAvatar() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const dispatch = useDispatch();

    const handleUserUpdate = async (data) => {
        try {
            const updatedUser = await updateUserAvatar(data.avatar[0]);

            if (!updatedUser || !updatedUser.user) {
                throw new Error('Failed to update avatar.');
            }

            dispatch(loginSuccess(updatedUser.user));

            toast.success('Avatar updated successfully');
        } catch (error) {
            console.log(`error updating profile: ${error.message}`);
        }
    };

    useEffect(() => {
        if (errors.avatar) {
            toast.error(errors.avatar.message);
        }
    }, [errors.avatar]);

    return (
        <StyledSettingForm onSubmit={handleSubmit(handleUserUpdate)}>
            <label>Avatar:</label>
            <InputContainer>
                <StyledInput
                    type="file"
                    accept="image/*"
                    {...register('avatar', {
                        required: 'Avatar is required',
                    })}
                />
                <ButtonIcon disabled={isSubmitting}>
                    <MdCheck />
                </ButtonIcon>
            </InputContainer>
        </StyledSettingForm>
    );
}

export default UpdateUserAvatar;
