import { useSelector, useDispatch } from "react-redux";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import { addContact,  removeContact, filterContacts} from "redux/contacts/contacts-actions";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
 

const MyContacts = () => {
    const contacts = useSelector(getFilteredContacts)
    const filter = useSelector(store  => store.contacts.contacts.filter);
    const dispatch = useDispatch()
    const filteredContacts = useSelector(getFilteredContacts)  
    console.log(filteredContacts)  
    const onAddContact = (payload) => {
        const  action = addContact(payload)
        dispatch(action)
         
    }
    const onRemoveContact = (payload) => {
        dispatch(removeContact(payload));
         
    }

   const onSetFilter = ({target}) => {
     dispatch(filterContacts(target.value))
         
   }
 
 
    return (
        <div>
            <ContactCard>
                <h1>Phonebook</h1>
                <FormAddContact onSubmit={onAddContact}/>
                <Filter onChange={onSetFilter} value={filter}/>
                <ContactList   contacts={contacts}  removeContact={onRemoveContact}/>
            </ContactCard>
        </div>
    )

}

export default MyContacts;


const ContactCard =  styled.div`
  width: 450px;
  margin-left: 60px;
  margin-top: 60px;
`