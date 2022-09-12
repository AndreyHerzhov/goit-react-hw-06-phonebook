import { createReducer } from "@reduxjs/toolkit";
import { addContact,removeContact,filterContacts } from "redux/contacts/contacts-actions"

const initialState = {
    contacts:{
        items: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ""
    }
}

export const contactsReducer = createReducer(initialState, {
    [addContact.type]: (store, action) =>  void(store.contacts.items.push(action.payload)),
    [removeContact.type]: (store, {payload}) => void(store.contacts.items = store.contacts.items.filter(contact => contact.id !== payload)),
    [filterContacts.type]: (store, {payload}) => void(store.contacts.filter = payload) ,
})