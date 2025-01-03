import { useForm } from 'react-hook-form';
import { updateUserName, updateUserPosition } from '../../services/apiAuth';
import { loginSuccess } from './authSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../ui/Button';
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

function UpdateUserPosition() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const dispatch = useDispatch();

    const handleUserUpdate = async (data) => {
        try {
            const updatedUser = await updateUserPosition(data.position);
            dispatch(loginSuccess(updatedUser.user));

            toast.success('Updated');
        } catch (error) {
            console.log(`error updating profile: ${error.message}`);
        }
    };

    useEffect(() => {
        if (errors.position) {
            toast.error(errors.position.message);
        }
    }, [errors.position]);

    return (
        <StyledSettingForm onSubmit={handleSubmit(handleUserUpdate)}>
            <label>Position:</label>
            <InputContainer>
                <input
                    type="text"
                    placeholder="Enter Position"
                    {...register('position', {
                        required: 'Position is required',
                        minLength: {
                            value: 4,
                            message: 'Position should be at least 4 characters',
                        },
                    })}
                />
                <ButtonIcon disabled={isSubmitting}>
                    <MdCheck />
                </ButtonIcon>
            </InputContainer>
        </StyledSettingForm>
    );
}

export default UpdateUserPosition;
