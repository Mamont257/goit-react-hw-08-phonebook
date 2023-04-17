import { useDispatch } from 'react-redux';
import { ContactList } from './components/ContactList/ContactList';
import { useEffect } from 'react';
import AppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import { fetchCurrentUser } from 'redux/auth/auth-operation';

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
        <Route path="/contact" element={<ContactList />} />
        <Route path="/registered" element={<RegisterView />} />
        <Route path="/sing-in" element={<LoginView />} />
      </Routes>
    </div>
  );
}
