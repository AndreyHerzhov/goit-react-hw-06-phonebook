export const getContacts = store => store.contacts;


export const getFilteredContacts = ({contacts, filter}) => {
    if(!filter){
        return contacts;
    }
    const normalizedFilter = filter.toString().toLowerCase();
    const result = contacts.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        
        return (normalizedName.includes(normalizedFilter))
    });

    return result;
}
 

 