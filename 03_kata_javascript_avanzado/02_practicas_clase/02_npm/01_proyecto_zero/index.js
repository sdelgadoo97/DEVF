// package cowsay

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()

// package yodasay
var yodasay = require('yodasay');

console.log(yodasay.say({
  text : 'Use yodasay, you will.'
}));

// or yodasay.think()