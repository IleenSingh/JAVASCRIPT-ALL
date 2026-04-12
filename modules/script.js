//let - jab value aage jaake badalni hai 
//const - value change ni hoti kbhi
//var(es5 ka part hai) -container stores values

//var
var username = "ileen";
//window meain add hota hai 
//function scoped hota hai
// phir se declare krrskte hai but error ni ata hai

//let
let a =100;
//let use krna h hmesha kyuki ye unidentified error se bachata hai and 
//redeclaration is not used with let
 

//const -no change
const nickname = "frooti";

//Scope [global , block , functional]
// Block Scope → Code inside {} like in loops, if , etc.
// Function Scope → Code inside a function
// let and const follow block scope.
// var ignores block scope — which leads to bugs.



                //  Temporal Dead zone
// The Temporal Dead Zone is the time between:
// when a variable is declared and when it is initialized (assigned a value)
// During this period, you cannot access the variable, even though it is in scope.
console.log(answer);
let answer = "yes";
