export const getFilteredContacts = (store) => {
    const a = JSON.stringify(store.contacts)
    const b = JSON.parse(a)
    const contacts = b.contacts.items
    const filter = b.contacts.filter
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
 

 