const event = require('events');
const em = new event.EventEmitter();

em.on('eventOne', () => {
  console.log('Event One occurred');
});

em.on('eventTwo', () => {
  console.log('Event Two occurred');
});

console.log('Main loop started. Listening for events...');

setTimeout(() => {
  em.emit('eventOne');
}, 2000);

setTimeout(() => {
  em.emit('eventTwo');
}, 4000);

setTimeout(() => {
  em.emit('eventOne');
}, 6000);
