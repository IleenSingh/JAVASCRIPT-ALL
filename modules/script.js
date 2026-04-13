// //let - jab value aage jaake badalni hai 
// //const - value change ni hoti kbhi
// //var(es5 ka part hai) -container stores values

// //var

// var username = "ileen";
// //window meain add hota hai 
// //function scoped hota hai
// // phir se declare krrskte hai but error ni ata hai

// //let

// let a =100;
// //let use krna h hmesha kyuki ye unidentified error se bachata hai and 
// //redeclaration is not used with let
 

// //const -no change

// const nickname = "frooti";

// //Scope [global , block , functional]


// // Block Scope → Code inside {} like in loops, if , etc.
// // Function Scope → Code inside a function
// // let and const follow block scope.
// // var ignores block scope — which leads to bugs.



// //  Temporal Dead zone


// // The Temporal Dead Zone is the time between:
// // when a variable is declared and when it is initialized (assigned a value)
// // During this period, you cannot access the variable, even though it is in scope.
// console.log(answer);
// let answer = "yes";

// //HOISTING

// // JavaScript prepares memory before running code.
// // It moves all declarations to the top — this is called hoisting.
// // But:var is hoisted and set to undefined
// // let and const are hoisted but not initialized — so accessing them early gives ReferenceError

// important and confusing question
// // why const allows changing object properties?

// // const locks the reference (memory address) But the object’s properties can still be changed means const does not make objects immutable—it only prevents reassignment of the variable.
// const person ={name : "Ileen"};
// person.name = "Singh"; //it is allowed
// person ={}; //not allowed


  //DATA TYPES ->
  // 1 Primitive Data TYpes -> aisi values jinko copy krne par ek real value mil jaaye
  // string, number, boolean, null, undefined, symbol, bigint
  
  // 2 Reference data types ->copy krne par real nhi but reference milega parent ka
  // arrays [], objects {}, functions ()
  //a= b then b mai jo change hoga woh a mai bhi hoga