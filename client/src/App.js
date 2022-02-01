import React, { useEffect, useState } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import SearchComponent from './components/SearchComponent';
import AddContact from './components/AddContact';
import { getAllContacts } from './service/service';


function App() {

  const [allContacts, setAllContacts] = useState();

  useEffect(() => {
    getAllContacts().then(res => {
      setAllContacts(res.data);
    })
  },[])

  return (
    <div className="App">
      <SearchComponent />
      <AddContact allContacts={allContacts} setAllContacts={setAllContacts}/>
      <ListComponent allContacts={allContacts}/>
    </div>
  );
}

export default App;
