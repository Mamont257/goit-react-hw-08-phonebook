import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectFilter } from 'redux/selectors';
import AppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/restered" element={<RegisterView />} />
        <Route path="/sing-in" element={<LoginView />} />
      </Routes>

      {/* <h1>Phonebook</h1> */}
      {/* <ContactForm /> */}
      {/* <h2>Contacts</h2> */}
      {/* <Filter /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <ContactList /> */}
    </div>
  );
}
