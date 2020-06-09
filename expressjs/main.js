//express js is a framework of node js. In which all node js ready made module is available we can use it directly in our code

const express =require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.get('/users',(req,res)=>{
    res.send('users data acess')
})
app.post('/users/profiles',(req,res)=>{
    res.send('users profile data acess')
})
//For post method open postman api tool and add the url there and select the POST method and click on  send you will get response which is in above console "users profiles data access"
app.listen(8000,()=>console.log('Server created'))