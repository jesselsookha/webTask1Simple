/*
    Program: Arrow Functions (code11.js) 
    Programmer: Jessel Sookha
    Date: 1 August 2022 
    Description: There is another way to make functions even 
        more simple and concise - a little better than the 
        Function Expressions noted in the code10.js file     
*/

/*
 let func = (arg1, arg2, ..., argN) => expression; 

 the format of this arrow function is quite interesting 

 its the shorter version of the following code 

 let func = function(arg1, arg2, ..., argN){
    return expression; 
 }; 
*/

let sum = (num1, num2) => num1 + num2;

/*
 This is the shorter form of: 

 let sum = function(num1, num2){ 
    return num1 + num2; 
 }

 (num1, num2) => num1 + num2;

 the function accepts 2 arguments - and when executed - returns 
 the value of the evaluated expressing 
*/

alert(sum(7,8)); // 15

// if you have one parameter - then you can also omit the 
// () round brackets

let double = n => n * 2;
// let double = function(n) { return n * 2} 
alert(double(2)); // 4

// if there are no parameters - then you need the () round 
// brackets - weird ?? 

let sayHi = () => alert("Hello"); 
sayHi(); 

// Can also use Arrow Functions as Function Expressions 
// again - you can dynamically create the function 

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

// the more we read the code - the slowly we start to learn 
// and use this style coding 

// Multiline arrow functions 

let sum2 = (a, b) => {  
    // the curly brace opens a multiline function
    let result = a + b;
    return result; 
    // if we use curly braces, then we need an explicit "return"
};
  
alert( sum2(1, 2) ); // 3

// As stated - if you use the {} curly brackets - you need a return 


