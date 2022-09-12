import { DeleteButton, ContactListCard, List, ListItem, ContactListInfo } from "./ContactList.styled";
 
const ContactList = ({ contacts, removeContact }) => {
    const elements = contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
           <ContactListInfo>{name} - {number}</ContactListInfo> 
            <DeleteButton type="button" onClick={() => removeContact(id)}>Удалить</DeleteButton>
        </ListItem>
    ));

    return (
        <ContactListCard>
                <List>
                    {elements}
                </List>
        </ContactListCard>
    )
}

export default ContactList;