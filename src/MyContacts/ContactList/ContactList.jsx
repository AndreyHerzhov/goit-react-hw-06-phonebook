import { DeleteButton, ContactListCard, List, ListItem, ContactListInfo } from "./ContactList.styled";
import PropTypes from "prop-types" 
import { useSelector,useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import { removeContact } from "redux/contacts/contacts-slice";


const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getFilteredContacts)
  
    return (
        <ContactListCard>
                <List>
                  {contacts.length > 0 &&
                  contacts.map(({ id, name, number }) => (
                    <ListItem key={id}>
                       <ContactListInfo>{name} - {number}</ContactListInfo> 
                        <DeleteButton type="button" onClick={() => dispatch(removeContact(id))}>Удалить</DeleteButton>
                    </ListItem>
                ))}
                     
                </List>
        </ContactListCard>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func
  };