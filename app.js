import { EventEmitter } from 'events'


const eventEmitter = new EventEmitter()

eventEmitter.addListener('firstEvent', (data) => {
    console.log('firstEvent listener called', data)
})

eventEmitter.on('secondEvent', (data) => {
    console.log('secondEvent listener called', data)
})

eventEmitter.emit('firstEvent', { id: 1, name: 'first' })
eventEmitter.emit('secondEvent', { id: 2, name: 'second' })

