const express = require('express');
const app = express();
app.get(express.static(__dirname + '/public')); 
app.get('/', (req, res) => {res.sendFile(__dirname + '/public/index.html');});
// app.get('/user/:userID/profile',(req,res) =>{

//     res.send('ALL USERS'+ req.params.userID);})

app.get('/user/:userid?',(req,res) =>{

    if(req.params.userid != undefined)
    res.send('USERS '+ req.params.userid);
    else 
    res.sent('ALL USERS LIST');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))