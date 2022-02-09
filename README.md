# CRUDApp:
Simple phonebook app. 
As name suggest, user can create, read, update and delete contact and store to SQL db. Each contact can be exported to .csv file.

# Dependencies, tech and software used:
node, npm, react, react-csv, axios, body-parser, cors, express, multer, mysql2, nodemon (optionall)
MySQL, MySQL Workbench

# How to use:
Clone repository to your PC.
Open /phonebook folder in VS Code, go to /server and in terminal type ```npm install``` and then start server with ```node index.js```. 
You will need to create datatable "contacts" manualy, with colums id int AI PK, name tinytext, last_name tinytext, address varchar(100), phonenumber varchar(12) and avatar_location. At least, that's how I done it with MySQL Workbench. 
Open new terminal and go to /client, do ```npm install``` and ```npm start```.

# Done:
Create and add SQL db.
Read from db.
List on page.
Delete from page and db.
Export contact to CSV file.
Edit each or all values in contact.

# To Do:
Style

# ChangeLog 
03.02.2022, 12:39 Managed to add avatar to sql, and read it
