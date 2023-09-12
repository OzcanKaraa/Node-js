//Events

const EventEmitter = require('events');
class logger extends EventEmitter{
    log(message){
        console.log(message);
  this.emit('connection',{id:1,messaage:'hello world'});
    }
}
module.exports = logger;