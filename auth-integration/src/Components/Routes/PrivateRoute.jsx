import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <span className="loading loading-ring loading-xl flex"></span>
    }

    if (!user) {
        return <Navigate to="/login">Login</Navigate>
    }
    return children;
};

export default PrivateRoute;