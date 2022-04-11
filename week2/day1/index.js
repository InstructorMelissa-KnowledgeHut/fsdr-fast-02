const EventEmitter = require('events')
// Creating an object that will use the events part of nodejs

const eventEmitter = new EventEmitter()
// naming it a value that we want to use and making a new one
const newEmitter = new EventEmitter()
const addEmitter = new EventEmitter()

// .on is used to add a callback that will be executed when triggered
eventEmitter.on('start', number => {
    console.log(`started ${number}`)
})
// the trigger is start and the argument is a number
eventEmitter.emit('start', 'Text')

newEmitter.on('start', (start,end)=> {
    console.log(`start from ${start} to ${end}`)
})
newEmitter.emit('start', 1, 100)

let m = 2
addEmitter.on('event', () => {
    console.log(++m)
})
addEmitter.emit('event')