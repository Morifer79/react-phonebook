import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const isExistsContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isExistsNumber = this.state.contacts.some(
      contact => contact.number === number
    );

    if (isExistsContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (isExistsNumber) {
      alert(`Phone number ${number} is already exists`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  existsContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactForm newContact={this.addNewContact} />

        <Title title="Contacts" />
        {contacts.length > 0 ? (
          <Filter value={filter} onChange={this.changeFilter} />
        ) : (
          <Notification message="You don't have any contacts!" />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={this.existsContacts()}
            onDelContact={this.delContact}
          />
        )}
      </Container>
    );
  }
}
