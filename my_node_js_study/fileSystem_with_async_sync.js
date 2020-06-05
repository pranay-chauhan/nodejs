const fs = require('fs');
    // fs.readFile(__dirname+"/demo.txt","utf-8",(err,data)=>{
    //     console.log(data)
    // })
//Remember that if you writing syncronised code then write using try catch block.
//Also if you write syncrnonised code then first excute the syncronised code then asyncronised
//In node js any file name with "Sync" then it is syncronised method otherwise it will be Asyncronise
    try{
        const data = fs.readFileSync(__dirname+"/demo.txt","utf-8");
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
console.log("Completed")
