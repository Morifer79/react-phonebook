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
	

  addNewContact = (values, {resetForm}) => {
    const isExistsContact = this.initialValues.contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    const isExistsNumber = this.initialValues.contacts.some(
      ({ number }) => number === values.number
    );

    if (isExistsContact) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    if (isExistsNumber) {
      alert(`Phone number ${values.number} is already exists`);
      return;
		}

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...values }],
		}));

		resetForm();
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  existsContacts = ({ filter, contacts } = this.state) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  delContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idContact),
      };
    });
  };

	render() {
		const { filter, contacts } = this.state;
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.addNewContact} />

        <Title title="Contacts" />
        {contacts.length > 0 ? (
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
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
