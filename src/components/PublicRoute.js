import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/auth-selectors';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
}
