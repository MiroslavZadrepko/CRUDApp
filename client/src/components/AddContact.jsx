import React, { useState } from 'react';
import { addContact } from '../service/service';

const AddContact = () => {

    const [addName, setAddName] = useState('');
    const [addLastName, setAddLastName] = useState('');
    const [addAddress, setAddAddress] = useState('');
    const [addPhonenumber, setAddPhonenumber] = useState(0);
    const [addImage, setAddImage] = useState('');

    const submit = (e) => {
        
        addContact(addName, addLastName, addAddress, addPhonenumber, addImage).then(res => {
            console.log(res.data);
        }); 
    }
    
    return (
        <>
            <div >
                <form onSubmit={submit}  className='form'>
                    <label>Name </label>
                    <input type="text" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e) => {
                        setAddName(e.target.value)
                    }} />

                    <label>Last Name </label>
                    <input type="text" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e) => {
                        setAddLastName(e.target.value)
                    }} />

                    <label>Address (city, street, number) </label>
                    <input onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e) => {
                        setAddAddress(e.target.value)
                    }} />

                    <label>Phone number </label>
                    <input type="number" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e) => {
                        setAddPhonenumber(e.target.value)
                    }} />

                    <label >Upload image</label>
                    <input type="text" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onChange={(e) => {
                        setAddImage(e.target.value)
                    }} />

                    <button type="submit">Submit</button>
                </form>

            </div>

        </>
    );
}

export default AddContact;