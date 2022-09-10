import React from "react";
import ContactForm from "./moleculs/ContactForm/ContactForm";
import ContactList from "./moleculs/ContactList/ContactList";
import styled from "styled-components";
import Filter from "./moleculs/Filter/Filter";
import { useDispatch } from "react-redux"; 
import { useSelector } from "react-redux";
import { addContact } from "redux/actions";
import initialStore from "../redux/store"

export default function App() {
  const contacts = useSelector(store => store.contacts)
  console.log(contacts)
  const dispatch = useDispatch()
  const onAddContact = (payload) => {
    const action = addContact(payload)
    dispatch(action)
  }
    
  return (
    <div>
      <ContactCard>
          <h1>Phonebook</h1>
          <ContactForm  onSubmit={onAddContact}/>
          <h2>Contacts</h2>
          <Filter    />
          <ContactList contacts={contacts}/>
      </ContactCard> 
    </div>
  )
}

 

const ContactCard =  styled.div`
  width: 450px;
  height: 600px;
  margin-left: 60px;
  margin-top: 60px;
`