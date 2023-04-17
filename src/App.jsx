import { useDispatch } from 'react-redux';
import { ContactList } from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute component={<ContactList />} redirectTo="/sing-in" />
          }
        />
        <Route
          path="/registered"
          element={
            <PublicRoute component={<RegisterView />} redirectTo="/contact" />
          }
        />
        <Route
          path="/sing-in"
          element={
            <PublicRoute component={<LoginView />} redirectTo="/contact" />
          }
        />
      </Routes>
    </div>
  );
}
<RegisterView />;
