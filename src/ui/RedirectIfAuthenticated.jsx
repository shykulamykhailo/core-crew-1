import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RedirectIfAuthenticated({ children }) {
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(
        function () {
            if (isAuthenticated) {
                navigate('/profile');
            }
        },
        [isAuthenticated, navigate]
    );

    return children;
}

export default RedirectIfAuthenticated;
