import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
  state = {
  contacts: [],
  filter: ''
}

  // handNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // }
  formSubmitHandler = data => {
    // console.log(data);

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
<div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
</div>

      
    )
  }
};
