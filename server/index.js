const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'phonebook'
})

app.post("/add", (req, res)=>{
    
    const addName = req.body.addName
    const addLastName = req.body.addLastName
    const addAddress = req.body.addAddress
    const addPhonenumber = req.body.addPhonenumber
    const addImage = req.body.addImage
    
    db.query(
        "INSERT INTO contacts (name, last_name, address, phonenumber, avatar_location) VALUES (?,?,?,?,?)",
        [addName, addLastName, addAddress, addPhonenumber, addImage], 
        (err, resault) =>{
            if(err){
                console.log(err);
            } else {
                res.send(resault);
            }
        }
    )
})

app.get("/contacts", (req, res) => {
    db.query(
        "SELECT * FROM contacts",
        (err, resault) =>{
            if(err){
                console.log(err);
            } else {
                res.send(resault)
            }
        }
    )
})

app.put("/updatename", (req,res) => {
    const id = req.body.id
    const name = req.body.name 

    db.query(
        "UPDATE contacts SET name = ? WHERE id = ?", 
        [name, id],
        (err, resault) => {
            if(err) {
                console.log(err);
            } else {
                res.send(resault)
            }
        }
    )
})

app.put("/updatelastname", (req,res) => {
    const id = req.body.id
    const lastName = req.body.last_name 

    db.query(
        "UPDATE contacts SET last_name = ? WHERE id = ?", 
        [lastName, id],
        (err, resault) => {
            if(err) {
                console.log(err);
            } else {
                res.send(resault)
            }
        }
    )
})

app.put("/updateaddress", (req,res) => {
    const id = req.body.id
    const address = req.body.address 

    db.query(
        "UPDATE contacts SET address = ? WHERE id = ?", 
        [address, id],
        (err, resault) => {
            if(err) {
                console.log(err);
            } else {
                res.send(resault)
            }
        }
    )
})

app.put("/updatephonenumber", (req,res) => {
    const id = req.body.id
    const phonenumber = req.body.phonenumber 

    db.query(
        "UPDATE contacts SET phonenumber = ? WHERE id = ?", 
        [phonenumber, id],
        (err, resault) => {
            if(err) {
                console.log(err);
            } else {
                res.send(resault)
            }
        }
    )
})

app.delete("/delete/:id", (req,res) => {
    const id = req.params.id
    db.query(
        "DELETE FROM contacts WHERE id = ?", id, (err, result) =>{
            if(err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})


app.listen(3001, () => {
    console.log('runing on port 3001');
})