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


//   //DATA TYPES ->
//   // 1 Primitive Data TYpes -> aisi values jinko copy krne par ek real value mil jaaye
//   // string, number, boolean, null, undefined, symbol, bigint
  
//   // 2 Reference data types ->copy krne par real nhi but reference milega parent ka
//   // arrays [], objects {}, functions ()
//   //a= b then b mai jo change hoga woh a mai bhi hoga

//   //Strings
//   //* single double quotes or backticks mai wrapped hote in js
//   //undefined
//   // variable declared but not assigned
//   //Symbol(Immutable)
//   // Symbol is a primitive data type used to create unique keys for objects.
// const s1 = Symbol("id");
// const s2 = Symbol("id");

// console.log(s1 === s2); // false

// // BigInt(n) ->last mai n laga dete hai 
// // Number.MAX_SAFE_INTEGER bataega sabsi bade value ek integer mai kha tkk le skte h iske upar lena h toh BigInt use hota hai

// //Dynamic Typing
// // A variable’s type is determined at runtime, and it can change anytime.
// //means datatype declare ni krte hai or ek baar intialised krne k baad kitne bhi baar change krrskte hai
// let x = 10;        // number
// x = "Hello";       // now string
// x = true;          // now boolean

// //typeof 

// //typeof returns a string indicating the type of a variable or value.
// typeof x;
// //null ka type object hota h remember

// //type coercion
// //  Automatic conversion of one data type into another
// // 1. left mai string aagya + ke → converts everything to string
// //2.  -, *, / → convert to number
// //3. true → 1, false → 0
// // example
// "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1

// truthy vs falsy values

// Falsy values
// Falsy values are values that evaluate to false in a boolean context; all other values are truthy.

// false
// 0
// -0
// 0n (BigInt zero)
// ""
// null
// undefined
// NaN

//Truthy values

// "hello"
// 1
// -5
// []
// {}
// true
// "0"
// "false"

// NaN is a special numeric value that represents an invalid number result.

0 / 0           // NaN
"abc" / 2       // NaN
Number("hello") // NaN

// typeof NaN is number because failed mathematical operation number hai isliye

// Difference between null and undefined
// undefined means a variable is declared but not assigned, while null is an explicitly assigned empty value.
