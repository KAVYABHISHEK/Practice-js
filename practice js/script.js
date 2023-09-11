//java script 

//---->variables
let x = 5;                        
let y = 32;
let z = x+y;
console.log(z);

const a = 5;
const b = 6;
const c = a + b;
console.log(c);

//const - always use const when the declared value should not be changed.
//let -  use in the case when const cant be used.
// we cannot redeclare a variable declared with let.
/*
////////// Data Types in js /////////////
string //------------------>"", '', `${}`
Number //----------------> which represents integers and floating point numbers
Boolean //-----------------> true / false
null  // --------> which means value is empty 
undefined // --------> means value is not assigned
BigInt //---------------> Big int variables are used to store big integer values that are too big to be represented by normal number.
Object //---------> to create an object use {}
typeof operator //--------------> can be used this operator to find the type of variable.
*/

////////////////  Arrays   ////////////////
//sorting of an array with strings
const fruits =  ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

//sorting of nums

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
    return a - b;               // comparing function
})
console.log(points);
// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

const pointsTwo = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
    return b - a;  
})
console.log(points);

// to find max and min of array
//max
function myArrayMax(points){
    return Math.max.apply(null , points)
}
console.log(myArrayMax(points));
//min
function myArrayMin(points){
    return Math.min.apply(null , points)
}
console.log(myArrayMin(points));

//array methods
//length
console.log(points.length)
//tostring
console.log(points.toString())
//joining two arrays
console.log(points.join(""))
//push and pop
let xy = ['hello','bye','come'];
xy.push('ok');
xy.push('lets go')
console.log(xy);
let out = xy.pop();
console.log(out)
//merging three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
// slice and splice
const not = ["hello","world","ok","bye","omg"];
console.log(not.slice(1,3));
console.log(not.splice(4));
console.log(not);



////////////////////// Functions //////////////////////
// example for a function :
function myFuction(a,b){
    return a+b;
} 
// calling the function
console.log(myFuction(45,6));

// in functions a javascript function is stored in a variable then its called function expression.
const myFunction = function (a, b){
    return a * b
}
 console.log(myFunction(4, 3));

 // Function hoisting
// hoisting is , we can call functions before they are declared

//Functions defined using an expression are not hoisted.
console.log(fun(5));

function fun(x){
    return x*x;
};

// Arrow functions
 // for one line we dont need {}.
const v = (x,y)=> x + y ;
console.log(v(55,99));  

//for multilines

let hello = ()=>{
    return "hellooo";
}
console.log(hello());

//bind funcrions
// with bind() method an object can borrow a method from another object.
const person = {
    firstName : "Joey",
    lastName : "Tribiyani",
    fullName : function(){
        return this.firstName+""+this.lastName;
    }
}

const member = {
    firstName : "Ross",
    lastName : "Galler",
}

let fullName = person.fullName.bind(member);

console.log(fullName());

// Clousers
//A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
//In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.

let g =  6;

function testing(){
    g = 6;
}

//function add(){
  //  let counter = 0;
   // function plus(){
    //counter += 1;
    //}
    //plus();
    //return counter;
//}
//console.log(add());

const add = function(){
    let counter =  0;
    return function(){
        counter += 1;
        return counter;
    }

}
()
console.log(add());
console.log(add());
console.log(add());




///////////////////////  JavaScript Scopes  ////////////////// 
/*
//Block scope
// the variables declared in blocks cannot accessed out side the block.
{
    let x = 6 
}

//variables declared using var cannot have block scope
{
    var l = 6 
}  // can be used 

//Local scope
//Variables declared within a JavaScript function, become LOCAL to the function.
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";      //function scope
    // code here CAN use carName
  }
  
  // code here can NOT use carName

  //Global scope 
  const d =  152;
  // this is declared globally and use any where


//////////////// DOM ////////////////////
const button = document.getElementById('button__four');
button.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = 'yellow';
});

const buttonThree = document.getElementById('button__three') ;
buttonThree.addEventListener('click',function(){
    document.querySelector('.date').innerHTML = Date();
});

const buttonOne = document.querySelector('.button__one');
buttonOne.addEventListener('click',function(){
    document.querySelector('body').style.background = '#f5f5dc'
});
*/