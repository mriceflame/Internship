// console.log("Hello");
// alert("Hello");

//Global Objects of Node.js
// __dirname , __filename, require, module, exports, console
const nm = require('./exp.js')
console.log(nm.ddd);
//console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(exports);
// console.log(console);


//-------------------------------------------------------
//Es6 ECMAscript 2015
//let, const, class, extends, super, import, export, ...
// let hello=function(){

//     let a = 20;
//     console.log(a);

// }
// hello();
// const a = function(){
//     console.log(a);
// }

// const hello = function(){
//     return 'Hello, from hello';
// }

// const hi = () => "Hello from Hi";

// const hello = function(a,b){
//     return a+b;
// }

// const hi = (a,b) => a+b;

// const hello = function(a,b){
//     a = a+2;
//     a = a*b;
//     return a;
// }

// const hi = ((a,b) => {
//     a = a+2;
//     a = a*b;
//     return a;
// });

// const hi = a => a*a;
// console.log(hi);

//Template String in Ae6

//  const name ="Farhan";
//  const age = 20;
// // console.log("Welcome, %s you are %s years old",name,age);

// console.log(`Welcome, ${name} you are ${age} years old`);

class Person{
    constructor(){
        this.name ="Farhan";
        this.age = 20;
    }
    getName(){
        return this.name;
    }   
    getAge(){
        return this.age;
    }
    }   

    const p = new Person;
console.log(p.getName());
console.log(p.getAge());

