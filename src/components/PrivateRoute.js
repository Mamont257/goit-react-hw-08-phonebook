import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin, selectIsRefresh } from 'redux/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLogin = useSelector(selectIsLogin);
  const isRefresh = useSelector(selectIsRefresh);
  const shouldRedirect = !isLogin && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
