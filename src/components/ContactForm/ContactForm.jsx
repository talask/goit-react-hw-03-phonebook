import React, { Component } from "react";
import { nanoid } from 'nanoid';


export class ContactForm extends Component {
    
    state = {
        name: '',
        number: '',
      };
     
      
    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
        
    };

    handleSubmit = e => {
        e.preventDefault();
    
        const { name, number } = this.state;
        this.props.contactsChange({name: name, number: number});
       
        this.reset();
    };

    reset = () => {
        this.setState({ 
          name: '',
          number: '',
        });
    };

    render() {
       
        const { name, number } = this.state;
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                 Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    id={nanoid()}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleChange}
                    required
                />
       
                <label htmlFor={this.numberInputId}>
                    Phone
                </label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    id={nanoid()}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.handleChange}
                    required
                />
        
                <button type="submit">Add contact</button>
            </form>
        )
    }
}