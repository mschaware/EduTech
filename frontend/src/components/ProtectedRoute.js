// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../context/AuthContext';

// const ProtectedRoute = ({ children }) => {
//     const { isAuthenticated } = useContext(AuthContext);

//     return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
