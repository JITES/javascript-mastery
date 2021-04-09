// var cluster = require('cluster');
// if (cluster.isMaster) {
//   var worker = cluster.fork();
//   worker.on('message', function (msg) {
//     console.log('Master:', msg);
//   });
// } else {
//   console.log('Worker:', 'worker starting');
//   process.send('worker started');
//   process.exit();
// }

// var readable = require('fs').createReadStream('eval.js');
// readable.on('data', (data) => {
//   console.log(data);
// });
// foo();

// function foo() {
//   console.log('Working');
//   return 0;
// }
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// var persons = new Person('Jites', 3);
// var persons2 = new Person('fdf', 2);
// var persons3 = new Person('fdf', 5);
// var persons4 = new Person('fdf', 20);

// var a = [persons4, persons, persons3, persons2];

// console.log(
//   a.sort(function (a, b) {
//     return b.age - a.age;
//   }),
// );

// function Sq(l) {
//   this.l = l;
// }
// function SqA() {
//   return this.l * this.l;
// }

// var a = new Sq(3); How to add custom property
// Sq.prototype.area = SqA;
// console.log(Sq.area);

// let ex = new Date();
// ex.setTime(-1);
// console.log(ex.toUTCString());

// function getRandom() {
//   let tdy = new Date();
//   var bigN = tdy.getSeconds() * tdy.getTime();
//   bigN *= Math.sqrt(tdy.getMinutes());
//   var randN = (bigN % 4) + 1;
//   return Math.floor(randN);
// }

// console.log(getRandom());

// function getHit() {
//   return Math.round(Math.random() * 3) + 1;
// }
// console.log(getHit());
// function check(p) {
//   if (typeof p == 'number') return 'correct';
//   else return p;
// }
// console.log(check(100));

// var ch1 = 'b';

// var ch2;

// switch (ch1) {
//   case 'a':
//     ch2 = '1';
//   case 'b':
//     ch2 = '2';
//   case 'c':
//     ch2 = '3';
//     break;
//   default:
//     ch2 = '4';
// }
// console.log(ch2);

// var x = 3;
// var y = 0;

// function testY() {
//   y++;
//   return true;
// }

// if (x >= 3 && testY()) {
//   y++;
// }
// if (x < 3 || testY()) {
//   y++;
// }
// if (x < 3 && testY()) {
//   y++;
// }
// if (x >= 3 || testY()) {
//   y++;
// }

// var z = y;
// console.log(z);
//

// var stu = new Object({ type: 'student' });
// function setVals(s) {
//   s.name = 'John';
//   s.age = 15;
//   s.id = 100;
// }

// setVals(stu);
// console.log(Object.keys(stu).length);

// JS cookies

// function test(a, b) {
//   return a + b;
// }

// console.log(test.call(this, 2, 3)); call apply

// var a = 'test';
// var b = String('test');
// var c = new String('test');

// if (a === b) {
//   console.log('correc');
// }
// const cluster = require('cluster');
// const http = require('http');

// var port = 3000;
// if (cluster.isMaster) {
//   var worker1 = cluster.fork();
//   var worker2 = cluster.fork();
//   worker1.send(port);
//   worker1.send(port + 1);
//   worker2.send(port + 1);
//   worker2.send(port);
// } else {
//   process.on('message', function (port) {
//     console.log(
//       'worker' + cluster.worker.process.id + ' started on port' + port,
//     );
//     http
//       .createServer(function (req, res) {
//         res.end('worker: ' + cluster.worker.process.pid);
//       })
//       .listen(port);
//   });
// }

// var index = 0;

// do {
//   console.log(++index);
// } while (index <= 10);

// var A = new Array(5);
// console.log(A);

// var a = typeof new Number(0);
// console.log(typeof a);

// var y;
// function modifyVariables(x) {
//   var z = 5;
//   x += 2;
//   y += x + z;
// }

// var x = 1;
// var y = 2;
// var z = 3;
// modifyVariables(x);
// console.log(x);
// console.log(y);
// console.log(z);

let someText = 'Javascript1.2';
let pattern = /(\w+)(\d)\.(\d)/i;
let outcome = pattern.test(someText);
console.log(outcome);
