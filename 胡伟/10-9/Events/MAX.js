const emitter = require('events');
const util = require('util');
function person(name,age) {
    this.name=name;
    this.age=age;
}
util.inherits(person,emitter);
var xh = new person('小红',19);

xh.setMaxListeners(15);
xh.on('say',function () {
    console.log(1);
})
xh.on('say',function () {
    console.log(2);
})
xh.on('say',function () {
    console.log(3);
})
xh.on('say',function () {
    console.log(4);
})
xh.on('say',function () {
    console.log(5);
})
xh.on('say',function () {
    console.log(6);
})
xh.on('say',function () {
    console.log(7);
})
xh.on('say',function () {
    console.log(8);
})
xh.on('say',function () {
    console.log(9);
})
xh.on('say',function () {
    console.log(10);
})
xh.on('say',function () {
    console.log(11);
})

xh.emit('say');
