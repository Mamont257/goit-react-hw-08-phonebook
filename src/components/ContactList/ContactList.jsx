import React from 'react';
import {
  ContactsList,
  ContactsListItem,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id}>
          <p>{name}:</p>
          <p>{phone}</p>
          <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactBtn>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
