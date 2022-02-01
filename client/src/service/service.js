import axios from 'axios';

export const getAllContacts = () => axios.get(`http://localhost:3001/contacts`)
export const addContact = (addName, addLastName, addAddress, addPhonenumber, addImage) =>
    axios.post(`http://localhost:3001/add`, { addName, addLastName, addAddress, addPhonenumber, addImage });
export const deleteContact = (id) => { return axios.delete(`http://localhost:3001/delete/${id}`)}
export const updateName = (id, editedValue) => axios.put(`http://localhost:3001/updatename`, {id: id, name: editedValue})
export const updateLastName = (id, editedValue) => axios.put(`http://localhost:3001/updatelastname`, {id: id, last_name: editedValue})
export const updateAdress = (id, editedValue) => axios.put(`http://localhost:3001/updateaddress`, {id: id, address: editedValue})
export const updatePhonenumber = (id, editedValue) => axios.put(`http://localhost:3001/updatephonenumber`, {id: id, phonenumber: editedValue})

