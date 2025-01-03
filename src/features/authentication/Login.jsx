import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from './authActions';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../ui/Button';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    padding: 2rem;
`;

const Login = () => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('testtest');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserAction(email, password, navigate));
    };
    console.log(error);
    return (
        <FormWrapper>
            <StyledLoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </StyledLoginForm>
        </FormWrapper>
    );
};

export default Login;
