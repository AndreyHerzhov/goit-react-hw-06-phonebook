import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import styled from "styled-components";
import Filter from "./Filter/Filter";


const MyContacts = () => {
    
    

 
    return (
        <div>
            <ContactCard>
                <h1>Phonebook</h1>
                <FormAddContact/>
                <Filter/>
                <ContactList/>
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