import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from "./types";

const initialStore = {
    contacts: [],
    filter: "",
}

const reducer = (store = initialStore, {type, payload}) => {
    switch(type) {
        case ADD_CONTACT:
            return {...store, contacts: [...store.contacts, payload]};
        case REMOVE_CONTACT:
            const newContacts = store.contacts.filter(({id}) => id !== payload);
            console.log(newContacts)
            return {...store, books: newContacts};
        case SET_FILTER:
            return {...store, filter: payload};
            default:
                return store
    }
}

export default reducer