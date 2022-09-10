import ContactListItem from '../ContactListItem/ContactListItem' 
import { ContactListWrapper,List} from "./ContactList.styled"; 
import PropTypes from "prop-types"

export const  ContactList = ({contacts, onDeleteContact}) => {
  const elements = contacts.map(({id, name, number}) => {
    return (
      <ContactListItem  key={id} name={name} number={number} onClick={() => onDeleteContact(id)}/>
  )
})
        return (
            <ContactListWrapper>
            <List>
                {elements}</List>
            </ContactListWrapper>
        )
}
 
export default ContactList;

 

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired
// };

