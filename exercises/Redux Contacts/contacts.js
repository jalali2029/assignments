const redux = require("redux");

const initialState = {
    contacts: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.id)
            }
        case "EDIT_CONTACT":
            return {
                // contacts: state.contacts.map(contact => {
                //     if(contact.name === action.name){
                //         return {...contact, ...action.editedContact}
                //     }else { 
                //         return contact
                //     }
                // })
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.contact.id) {
                        if (action.contact.phone) {
                            contact.phone = action.contact.phone
                        }
                        if (action.contact.email) {

                            contact.email = action.contact.email
                        }
                        if (action.contact.name) {

                            contact.name = action.contact.name
                        }
                    }
                    return contact
                })
            }
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = (contact) => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    });
}
const removeContact = id => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        id
    })
}

const editContact = (contact) => {
    store.dispatch({
        type: "EDIT_CONTACT",
        contact
    })
}
addContact({
    id: 12,
    name: "shafiq",
    phone: "235-566-344",
    email: "abc@abc.com"
})

addContact({
    id: 23,
    name: "ben",
    phone: "235-066-384",
    email: "abc123@abc.com"
}
)

removeContact(23);
editContact({ id: 12, name: "steven" });
