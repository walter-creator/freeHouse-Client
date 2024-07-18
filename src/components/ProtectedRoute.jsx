import { Route, Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/signIn" />}
    />
  );
};

export default ProtectedRoute;
