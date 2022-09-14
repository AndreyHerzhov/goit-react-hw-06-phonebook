export const getContacts = store => store.contacts;


export const getFilteredContacts = (store) => {
    const { items, filter } = store.contacts
    if(!filter){
        return items;
    }
    const normalizedFilter = filter.toString().toLowerCase();
    const result = items.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        
        return (normalizedName.includes(normalizedFilter))
    });

    return result;
}
 
// export const getContacts = store => store.contacts;


// export const getFilteredContacts = ({contacts, filter}) => {
//     console.log(contacts)
//     if(!filter){
//         return contacts;
//     }
//     const normalizedFilter = filter.toString().toLowerCase();
//     const result = contacts.filter(({name}) => {
//         const normalizedName = name.toLowerCase();
        
//         return (normalizedName.includes(normalizedFilter))
//     });

//     return result;
// }
 
 