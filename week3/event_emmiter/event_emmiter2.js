/*Example using removeListener(event, listener) & addListener(event, listener) & 
on(event, listener) & emit(event, [arg1], [arg2], [...])*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('SecondEvent', function (data) {
    console.log('second subscriber: ' + data);
});

// Raising SecondEvent
eventEmitter.emit('SecondEvent', 'This is my second Node.js event emitter example.');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");