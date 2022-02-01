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

app.put("/update", (req,res) => {
    const id = req.body.id
    db.query(
        "UPDATE contacts SET  "
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