//create and trigger the custom event
const events = require('events');
const event = new events.EventEmitter

//event.on('click',(e)=>console.log(e));
//event.emit('click','Hello I am learning node js here')
// In the above case output will "Hello I am  learning node js code here"

// we can pass number an argument
event.on('click',(n1,n2)=>console.log(n1*n2))
event.emit('click',4,10)
//Note- make sure the first argument should be same in both event.on and event.emit