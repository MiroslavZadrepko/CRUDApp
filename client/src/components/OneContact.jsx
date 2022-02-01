import { deleteContact } from '../service/service';

const OneContact = ({ contact }) => {

    const deleteOneContact = (id) => {

        deleteContact(id).then(res => {

            window.location.reload(true);
        })
    }
    
    const exportContact = (id) => {
        console.log(contact);
    }

    return (
        <div className='oneContact'>
            <p>Name: {contact.name}</p>
            <p>Last name: {contact.last_name}</p>
            <p>Address: {contact.address}</p>
            <p>Phonemnumber: {contact.phonenumber}</p>

            <button onClick={() => deleteOneContact(contact.id)}>Delete</button>
            <button onClick={() => exportContact(contact.id)}>Export</button>
        </div>
    );
}

export default OneContact;