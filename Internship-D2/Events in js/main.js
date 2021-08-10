const events = require('events');  
const event = new events.EventEmitter();

// event.on('eTrigger',() => console.log("Hello from eTrigger"));

// event.emit('eTrigger');

// event.on('eTrigger',(e) => console.log(e));

// event.emit('eTrigger',"Hello from Mriceflame");

 event.on('eTrigger',(n1,n2) => console.log(n1+n2));

 event.emit('eTrigger', 2,3);

