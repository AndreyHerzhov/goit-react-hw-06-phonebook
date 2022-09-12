import { useSelector, useDispatch } from "react-redux";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import { addContact, removeContact} from "redux/contacts/contacts-slice";
import { setFilter } from "redux/filter/filter-slice";
import styled from "styled-components";
import { getFilteredContacts } from "../redux/contacts/contacts-selectors"
import Filter from "./Filter/Filter";

const MyContacts = () => {
    const contacts = useSelector(getFilteredContacts)
    const filter = useSelector(store  => store.filter);
    
    const dispatch = useDispatch()
    const onAddContact = (payload) => {
        const  action = addContact(payload)
        dispatch(action)
      
    }
    
    const onRemoveContact = (payload) => {
        dispatch(removeContact(payload));
    }

   const onSetFilter = ({target}) => {
        dispatch(setFilter(target.value))
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