import React, { useState } from 'react';
import OneContact from './OneContact';

const ListComponent = ({ allContacts }) => {

    const [term, setTerm] = useState('')

    return (
        <div className='listDiv'>
            <label htmlFor="searchField">Search by name: </label>
            <input type='text' name="searchField" onChange={(e) => { setTerm(e.target.value) }} />

            {allContacts ?
                allContacts.filter((contactName) => {
                    if (term == '') {
                        return contactName
                    } else if (contactName.name.toLowerCase().includes(term.toLowerCase())) {
                        return contactName
                        /**search is by name, but it can be ease modified to search last name to, with || */
                    }
                }).map(contact => <OneContact key={contact.id} contact={contact} />) : ''
            }

        </div>
    );
}

export default ListComponent;