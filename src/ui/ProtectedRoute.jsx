import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(
        function () {
            if (!isAuthenticated) {
                navigate('/login');
            }
        },
        [isAuthenticated, navigate]
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
