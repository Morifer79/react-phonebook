import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <ButtonDel
              type="button"
              name="delete"
              onClick={() => onDelContact(contact.id)}
            >
              Delete
            </ButtonDel>
          }
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
