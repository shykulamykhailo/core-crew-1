import { useForm } from 'react-hook-form';
import { updateUserName } from '../../services/apiAuth';
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

function UpdateUserName() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const dispatch = useDispatch();

    const handleUserUpdate = async (data) => {
        try {
            const updatedUser = await updateUserName(data.fullName);
            dispatch(loginSuccess(updatedUser.user));

            toast.success('Updated');
        } catch (error) {
            console.log(`error updating profile: ${error.message}`);
        }
    };

    useEffect(() => {
        if (errors.fullName) {
            toast.error(errors.fullName.message);
        }
    }, [errors.fullName]);

    return (
        <StyledSettingForm onSubmit={handleSubmit(handleUserUpdate)}>
            <label>Full Name</label>
            <InputContainer>
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    {...register('fullName', {
                        required: 'Full name is required',
                        minLength: {
                            value: 2,
                            message:
                                'Full name should be at least 2 characters',
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

export default UpdateUserName;
