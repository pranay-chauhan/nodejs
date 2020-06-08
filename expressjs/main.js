//express js is a framework of node js. In which all node js ready made module is available we can use it directly in our code

const express =require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.get('/users',(req,res)=>{
    res.send('users data acess')
})
app.listen(8000,()=>console.log('Server created'))