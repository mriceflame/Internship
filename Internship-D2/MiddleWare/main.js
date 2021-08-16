const express = require('express');
const app = express();
const myMiddleware = (req,res,next)=>{ 
    console.log('Middleware Activated!!!');
    next();

}
app.use(myMiddleware);
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.listen(3000);