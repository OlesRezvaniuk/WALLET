import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/authSelector';

export const PublicRoute = ({ children }) => {
  const user = useSelector(authSelector);

  if (user.auth.token !== null) {
    return <Navigate to="/" />;
  }
  return children;
};
export const PrivateRoute = ({ children }) => {
  const user = useSelector(authSelector);

  if (user.auth.token === null) {
    return <Navigate to="/Login" />;
  }
  return children;
};
