import React, {useState} from "react";
import { NameInputTitle,ContactFormWrapper,ContactFormButton, Input } from "./ContactForm.styled"; 
import PropTypes from "prop-types"
import initialState from "./initialState"
import useForm from "hooks/useForm";
 

export default function ContactForm({onSubmit}) {
  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

  const {name, number} = state;
  
  return (
    <div>
  <ContactFormWrapper onSubmit={handleSubmit}>
                <NameInputTitle>
                Name:
                </NameInputTitle>
                <Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, 
                        apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, 
                        Charles de Batz de Castelmore d'Artagnan"
                        required/>        
                
                <NameInputTitle>
                Number:
                </NameInputTitle>
                <Input
                      onChange={handleChange}
                      value={number}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, 
                              dashes, parentheses and can start with +"
                      required
                />
                <ContactFormButton type="submit" value="Add contact" />
          </ContactFormWrapper>

    </div>
  )
} 

  // ContactForm.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
    
  // };




