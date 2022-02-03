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
    
    const handleFileRead = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        const base64result = base64.split(',')[1];
        setAddImage(base64result)
        console.log(base64result);
      }

      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
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
                    <input className='inputImg' type="file" onChange={(e) => {
                        
                        handleFileRead(e);
                    }} />

                    <button type="submit">Submit</button>
                </form>
               { }

            </div>

        </>
    );
}

export default AddContact;