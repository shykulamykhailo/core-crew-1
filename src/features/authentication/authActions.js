import { loginUser, logoutUser } from '../../services/apiAuth';
import { loginFailure, loginRequest, loginSuccess, logout } from './authSlice';

export const loginUserAction =
    (email, password, navigate) => async (dispatch) => {
        dispatch(loginRequest());
        try {
            const { data, error } = await loginUser(email, password);
            if (error) throw error;
            dispatch(loginSuccess(data.user));
            navigate('/profile');
        } catch (err) {
            dispatch(loginFailure(err.message));
        }
    };

export const logoutAction = () => async (dispatch) => {
    await logoutUser();
    dispatch(logout());
};
