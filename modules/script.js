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

// // truthy vs falsy values

// // Falsy values
// // Falsy values are values that evaluate to false in a boolean context; all other values are truthy.

// // false
// // 0
// // -0
// // 0n (BigInt zero)
// // ""
// // null
// // undefined
// // NaN

// //Truthy values

// // "hello"
// // 1
// // -5
// // []
// // {}
// // true
// // "0"
// // "false"

// // NaN is a special numeric value that represents an invalid number result.

// 0 / 0           // NaN
// "abc" / 2       // NaN
// Number("hello") // NaN

// // typeof NaN is number because failed mathematical operation number hai isliye

// // Difference between null and undefined
// // undefined means a variable is declared but not assigned, while null is an explicitly assigned empty value.


// //OPERATORS
// // 1. ARITHMETIC OPERATORS (+, -, *, /, %, **)
// // 2. ASSIGNMENT OPERATORS(= += -= *=, /=, %= )
// // 3. COMPARSION OPERATORS(== === != !== > < >= <= )
// // Difference between == and === , == check krta h bss value but === checks both type and value
// // 4. LOGICAL OPERATORS->uesd in conditions(&& || !)
// // 5. UNARY OPERATOR(TYPEOF ++ --)
// // 6. TERNARY OPERATOR (condn ? value1:value2)
// // 7. BITWISE OPERATOR (& | ^ ~ << >>)

// // !! use krte h nature jaane k liye truthy value h ya falsy

// //building rock paper scissor with if else control flow

// function rps(user, computer){
//     if(user === computer) return "draw";
//     if(user ==="Rock" && computer === "Scissor") return "user";
//     if(user ==="Scissor" && computer === "Paper") return "user";
//     if(user ==="Paper" && computer === "Rock") return "user";

//     return "computer";
// }

// console.log(rps("Rock" ,"Rock"));
// console.log(rps("Rock" ,"Scissor"));
// console.log(rps("Rock" ,"Paper"));

// //LOOPS

// //for loop
// // for(start;end ;change)

// // print 1 to 100 number
// for(let i=1 ;i<101 ;i++){
//     console.log(i);
// }

// //while loop
// //syntax

// // start
// // while(end){
// //     //code
// //     change
// // }

// let i =1;
// while(i<101){
//     console.log(i);
//     i++;
// }

// //do-while loop
// let j=1;
// do{
//     console.log(j);
//     j++;
// }
// while(j<20)

// //Question -> Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let num = prompt("Give a number : ");

// for(let i = 1 ; i<=num ;i++){
//     if(i%2 === 0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is Odd`);
//     }
// }


// //FUCTIONS

// //1st meethod
// //function declaration
// //  function fun_name(){
// //   //code
// //   }

// //2nd method (variable bna k uske andar fuction hoga ,jha function ka naam hi variable hoga)
// //function expression

// // let fnc = function(){
// // }
// //yha fnc hi function ka naam hai


// //3rd method Arrow function

// // let fnc = ()=>{
// // }

// //Parameters vs Arguements
// // Parameters are variables in a function definition, while arguments are the actual values passed when calling the function.

// // Default Rest Spread parameter

// //1. Default
// // Used when a value is missing

// // Example:
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet();        // Hello Guest
// greet("Ileen");  // Hello Fumo


// //2. Rest Parameters (...) → Collect

// //Used when you don’t know how many arguments will come

// // Example:
// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4, 5, 6);

// //3. Spread Operator (...) → Expand
// // (Opposite of rest) function call k time pe hota h use

// // Example:
// const arr = [1, 2, 3];

// console.log(...arr);


//FIRST CLASS FUNCTION -> Functions are treated like normal values or variables
// 1.treat them like values or store them 
const greet = function(){
    console.log("Hiiiiiiiiii!")
}

greet();

// 2.Pass functions like a value
function sayHello() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(sayHello);
// execute k andar sayhello pass hua or fn ek variable h toh fn sayhello fun ko hold krrliya 

// 3. Returning a function
// A function gives back another function 
function outer() {
  return function() {
    console.log("Hi");
  };
}

const result = outer();
result(); 

