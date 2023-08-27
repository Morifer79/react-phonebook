import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};
