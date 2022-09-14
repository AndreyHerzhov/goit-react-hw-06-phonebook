import { useState } from "react";
import { addContact } from "redux/contacts/contacts-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";

const useForm = ({initialState, onSubmit}) => {
    const [state, setState] = useState({...initialState});
    const dispatch = useDispatch()
    const contacts = useSelector(getFilteredContacts)
    
    const handleChange = ({target}) => {
        const { name, value } = target;
        const newValue =  value;
     
        setState(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const  action = addContact(state)
        
        const existedContact =  contacts.find(contact => contact.name === state.name)
        if(existedContact){
          alert('Notification', `${ state.name } is already in contacts`, 'Return');
          return
        } else { 
            dispatch(action)
        }
         
        console.log(state)
        setState({...initialState})
    };

    return {state, setState, handleChange, handleSubmit}
}

export default useForm;