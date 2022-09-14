import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"
import { Form, GroupWrapper, Label, Input, Button, ContactCard } from "./FormAddContact.styled";

const FormAddContact = () => {
    const {state, handleChange, handleSubmit} = useForm({initialState})

    const {name, number} = state;

    return (
        <ContactCard>
            
        <Form action="" onSubmit={handleSubmit}>
            <GroupWrapper>
                <Label htmlFor="">Name:</Label>
                <Input value={name} name="name" onChange={handleChange} type="text" 
                  required
                  placeholder="Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Number:</Label>
                <Input value={number} name="number" onChange={handleChange} type="tel" 
                 required
                 placeholder="+380(50)-48-58-168" 
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                />
            </GroupWrapper>
            
                <Button type="submit">Добавить</Button>
            
        </Form>
        </ContactCard>
    )

}

export default FormAddContact;


FormAddContact.propTypes = {
    onSubmit: PropTypes.func,
  };
