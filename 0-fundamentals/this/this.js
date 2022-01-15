/*function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER

this.check = 'global';

function foo() {
	console.log(this.check);
}

function bar() {
	console.log( this.a );
}

foo.call(this);


// method -> obj
// function -> global (window, global)

const video = {
    title: 'Mr',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this)
    }
}

let showTime = video.showTags;
console.log(showTime());

*/
// If a function is called with the new keyword, this will be the resulting object.
// If a function is called with .call(), .apply() or .bind(), this will be the object that is passed in.
// If a function is called on an object, obj.foo(), this will be the object it was called on.
// If a function is called on its own, sayMyName(), this will be either undefined (if in use strict; mode) or the global object (if in non-strict mode).


// *********************************** EXCEPTION *******************************************
// var sayMyName = function () {
//     console.log('My name is ' + this.name);
//   };

//   var jake = {
//     name: 'Jake'
//   }

//   var sayMyName = sayMyName.bind(jake);
//   sayMyName(); 

//   var MyObject = function (){
//     this.name = 'MyObjectName';
//     this.myProperty = 'property';
//   };

//   MyObject.prototype.doStuff = function (action) {
//     console.log(this.name + ' is ' + action + '!');
//   }

//   var obj = new MyObject();

//   setTimeout(obj.doStuff, 1000, 'awesome'); 

//   setTimeout(obj.doStuff.bind(obj), 1000, 'awesome'); 

// https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262`

// https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/

// var a = {
//     b: function() {
//         return this;
//     }
// };
 
// var foo = a.b;
// foo(); //window
 
// var a = {
//     b: function() {
//         var c = function() {
//             return this;
//         };
//         return c();
//     }
// };
 
// console.log(a.b()); //window

// The this keyword evaluates to the value of the ThisBinding of the current execution context.
// const video = {
//     title: 'Mr',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag);
//         },this)
//     }
// }

// let tags = video.showTags();
// console.log(tags)


function foo() {
    console.log(this.a);
}

var obj = {
    a : 2
}

var bar = new foo(obj)
console.log(bar())

// 1. Is the function called with new (new binding)? If so, this is the
// newly constructed object.
// var bar = new foo()

// 2. Is the function called with call or apply (explicit binding), even
// hidden inside a bind hard binding? If so, this is the explicitly
// specified object.
// var bar = foo.call( obj2 )

// 3. Is the function called with a context (implicit binding), otherwise
// known as an owning or containing object? If so, this is that con‐
// text object.
// var bar = obj1.foo()

// 4. Otherwise, default the this (default binding). If in strict mode,
// pick undefined, otherwise pick the global object.
// var bar = foo()

