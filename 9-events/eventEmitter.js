const EventEmitter = require('events');

class myEmitter extends EventEmitter {}

const emitter = new myEmitter();

emitter.on('event', (data) => {
    console.log('an event occurred: ', data);
});

emitter.emit('event', "data");