import axios from 'axios';

export const getAllContacts = () => axios.get(`http://localhost:3001/contacts`)
export const addContact = (addName, addLastName, addAddress, addPhonenumber, addImage) =>
    axios.post(`http://localhost:3001/add`, { addName, addLastName, addAddress, addPhonenumber, addImage });
export const deleteContact = (id) => {
    return axios.delete(`http://localhost:3001/delete/${id}`)}

