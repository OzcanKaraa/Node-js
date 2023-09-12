//Events Module
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('connection',function (args) {
    console.log('Baglanti kuruldu.',args);
})
emitter.emit('connection',{id:1,messaage:'hello world'});


//Logger sayfasi ile
const logger = require('./logger');
const logger = new logger();
logger.on('connection',function (args) {
    console.log('Baglanti kuruldu.',args);
})
logger.log('ozcan login oldu');



