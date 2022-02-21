import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
  contacts: [],
  filter: ''
}

  // handNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // }
  formSubmitHandler = data => {
    console.log(data);

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }
  
  render() {

    return (
<div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList contacts={this.state.contacts} />
</div>

      
    )
  }
};
