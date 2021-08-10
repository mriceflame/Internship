const express = require('express');
const app = express();
app.get(express.static(__dirname + '/public')); 
app.get('/', (req, res) => {res.sendFile(__dirname + '/public/index.html');})
app.get('/users',(req,res) =>{res.send('ALL USERS');})
app.listen(3000, () => console.log('Example app listening on port 3000!'))