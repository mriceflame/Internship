// // // function greeter(person) {
// // //     return "Hello, " + person;
// // //   }
   
// // //   let user = "Jane User";
   
// // //   document.body.textContent = greeter(user);

// // // ------------------------------------------------------------
// // //   //Interfaces
// // //   interface Person {
// // //     firstName: string;
// // //     lastName: string;
// // //   }
   
// // //   function greeter(person: Person) {
// // //     return "Hello, " + person.firstName + " " + person.lastName;
// // //   }
   
// // //   let user = { firstName: "Jane", lastName: "User" };
   
// // //   document.body.textContent = greeter(user);
// // // ---------------------------------------------------------------------------------
// // //   



// // // CLASSES


// //   class Student {
// //     fullName: string;
// //     constructor(
// //       public firstName: string,
// //       public middleInitial: string,
// //       public lastName: string
// //     ) {
// //       this.fullName = firstName + " " + middleInitial + " " + lastName;
// //     }
// //   }
   
// //   interface Person {
// //     firstName: string;
// //     lastName: string;
// //   }
   
// //   function greeter(person: Person) {
// //     return "Hello, " + person.firstName + " " + person.lastName;
// //   }
   
// //   let user = new Student("Jane", "M.", "User");
   
// //   console.log(greeter(user));

// //--------------------------

// class Person{
// firstName: string;
// lastName: string;
// age: number;
// constructor(private firstName: string,private lastName: string,private age: number){
// this.firstName=firstName;
// this.lastName=lastName;
// this.age=age;
//  }
//  getName(){
//      return ` ${this.firstName} ${this.lastName}`;
//  }
//  getAge(){
// return this.age;
//  }
// }

// let user = new Person("Jane","User",25);
// console.log(user.getName(), user.getAge());
//--------------------------------------------------------

