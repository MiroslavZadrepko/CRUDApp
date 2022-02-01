import { deleteContact, updateAdress, updateLastName, updateName, updatePhonenumber } from '../service/service';
import { CSVLink } from 'react-csv';
import { useRef, useState } from 'react';

const OneContact = ({ contact }) => {

    const [contactData, setContactData] = useState([])
    const csvLink = useRef()
    const headers = [
        { label: "id", key: "id" },
        { label: "First name", key: "name" },
        { label: "Last name", key: "last_name" },
        { label: "Address", key: "address" },
        { label: "Phonenumber", key: "phonenumber" },
        { label: "Avatar", key: "avatar_location" }
    ]

    const exportContact = (contact) => {
        let tmpData = []
        tmpData.push(contact)
        setContactData(tmpData)
    }

    const deleteOneContact = (id) => {
        deleteContact(id).then(res => {
            window.location.reload(true);
        })
    }

    const [selectedOption, setSelectedOption] = useState();
    const [editedValue, setEditedValue] = useState();

    const updateContact = (selected, id, editedValue) => {
        switch (selected) {
            case 'name':
                updateName(id, editedValue).then(res =>{window.location.reload(true);})
                return

            case 'last_name':
                updateLastName(id, editedValue).then(res => {window.location.reload(true);})
                return

            case 'address':
                updateAdress(id, editedValue).then(res=>{window.location.reload(true);})
                return

            case 'phonenumber':
                updatePhonenumber(id, editedValue).then(res=>{window.location.reload(true);})
                return

            default:
                break;
        }
    }

    return (
        <div className='oneContact'>
            <div>
                <p>Name: {contact.name}</p>
                <p>Last name: {contact.last_name}</p>
                <p>Address: {contact.address}</p>
                <p>Phonemnumber: {contact.phonenumber}</p>
            </div>

            <div className='oneContactBtn'>
                <button onClick={() => deleteOneContact(contact.id)}>Delete</button>
                <CSVLink
                    headers={headers}
                    data={contactData}
                    filename='contact.csv'
                    ref={csvLink}
                    target='_blank'
                ><button onClick={() => exportContact(contact)}>Export to CSV</button>
                </CSVLink>
            </div>

            <div className='oneContactEdit'>
                <select onChange={(e) => setSelectedOption(e.target.value)}>
                    <option defaultValue="update">Update:</option>
                    <option value="name">Name</option>
                    <option value="last_name">Last name</option>
                    <option value="address">Address</option>
                    <option value="phonenumber">Phonenumber</option>
                </select>
                
                <input onChange={(e) => { setEditedValue(e.target.value) }}></input>
                
                <button onClick={() => updateContact(selectedOption, contact.id, editedValue)} >Update contact</button>

            </div>


        </div>
    );
}

export default OneContact;