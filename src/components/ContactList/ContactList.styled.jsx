import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 0;
  gap: 4px;
`;

export const ContactsListItem = styled.li`
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const ContactBtn = styled.button`
  width: 48px;
  text-align: center;
  padding: 2px;
  margin-left: 10px;

  color: white;
  background-color: tomato;
  border: transparent;
  border-radius: 15px;
`;
