import React, { useEffect } from 'react';
import {
  ContactsList,
  ContactsListItem,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactsList>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactsListItem key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <ContactBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactBtn>
          </ContactsListItem>
        ))}
      </ContactsList>
    </div>
  );
};
