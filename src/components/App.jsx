import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectFilter } from 'redux/selectors';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFilter);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar/>


      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/contact" element={<ContactList/>}/>
        <Route path="/restered" element={<ContactForm/>}/>
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
