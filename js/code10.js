/*
    Program: Functions (code10.js) 
    Programmer: Jessel Sookha
    Date: 30 July 2022 
    Description: When we need to perform similar actions 
    in many places. Functions allows the code to be called 
    many times without the need to re-type the code.    
*/

/*
 We've seen some built-in functions: 
 - alert(message)
 - prompt(message, default)
 - confirm(question)

 Built-in functions are those functions that have already been 
 created and embedded in the coding of the programming language

 We'll learn those as we need to ... 

 But it would be interesting to create our own functions 
*/

function showMessage(){
    alert('Hello for the hundered time');
}

// Remember modules in the 1st semester 
// the above function has to be called in order for the 
// code inside to be executed 

/*
 the function keyword goes first - then the name of function 
 the () are needed immediately after 
 inside the brackets is the opportunity to mention the 
 parameters - the variables that could be used inside the 
 function body 

 function name(parameter1, parameter2, ... parameterN) {
    ... body ... 
 }
*/

// to call the showMessage() function 
showMessage(); 

/* *******************************************************
So one of the things that we have not spoken about so far 
is the scope of variables. 

Since it did not matter in the pseudocode versions of our 
programs, we didn't really worry about it or understand it 

the scope of a variable is important to understand because 
when & where it declared defines who has access to it.

Scope of variables 
==================

SCOPE OF VARIABLES
A scope is a region of the program and broadly speaking there 
are three places, where variables can be declared:

Inside a function or a block which is called local variables,

In the definition of function parameters which is called formal 
parameters.

Outside of all functions which is called global variables.
******************************************************* */

/* Local variables

So when a variable is delcared inside a module/procedure/function
it is only accessible to the code inside of that block of code 

function showMessage(){
    let message = "This is yet another Hello";
    alert(message);
}

that variable message is only accessible inside the function 
have a look at the following code 
*/

function CalcSomething(){
    let number1, number2; 
    number1 = 1; 
    number2 = 2; 
}

alert(number1); // Error - the variable is local to the function above

/* Global variables 

In almost all programming languages there is opportunity to declare 
a variable on the outside of any block of code. 

take note the block can be inside the function or even inside of 
a logical structure, here in JS, inside a set of {} curly brackets 

However it is quite interesting in the JS code ... 
*/

let userName = "Jennifer"; 

function showGreeting(){
    let msg = 'The username is ' + userName; 
    alert(msg);
}

showGreeting(); // calling the function 

// the ^above function has access to the userName variable 

let userName2 = "Jacob"; 

function showGreeting2(){
    userName2 = "Jessica"; //changing the global variable value

    let msg2 = "Hey " + userName2; 
    alert(msg2); // this should display the 2nd name  
}

alert(userName2); // This should just display the first name 

showGreeting2(); // calling the function 

alert(userName2); // after the function is called, the name changes

/* 
 Now the following code is quite something to understand 
 What happens if you declare a variable outside (global)
 and then declare a variable inside a function and name it 
 exactly the same thing ... 

 The term I have seen is that the inside one 'shadows' the 
 outside one. 
*/

let userName3 = "Joe"; // global variable 

function showGreeting3(){ 
    let userName3 = "Jackie"; // a local variable 

    let msg3 = 'The is greeting #101 to ' + userName3;  // Jackie

    alert(msg3); 
}

// the function created and used its own userName variable 
showGreeting3();

alert(userName3); // Joe 
// The original name assigned to variable remained unchanged
// because the function did not access the global variable 

/* Parameters 
 There comes a time when we need to pass data to functions & 
 we do this through parameters 

 These are variables declared in the function header in between 
 the () round brackets 

 Each programming language has its rules about the declaration 
 of paramets and how it is declared ... here in JS - its quite 
 simple 
*/

function displayThis(userName4, text){
    alert("Name is " + userName4 + ": " + text);
}

// the 2 parameters declared is userName4 and text ... take note 
// that there is no let reserved word used and since this is JS
// there is no datatype mentioned 

// Other programming languages would require the datatype 

// BUT there is one important thing to remember - 
// the ORDER OF THE PARAMETERS - this means that whatever the 
// order it is declared in, is the order of the values passed 
// to the function 

// So in the case of the ^above function the username must be 
// stated first and the text second 

displayThis('Joey','This is some text'); 
displayThis('Jill', 'This is just me typing something'); 

// take note of the next function call & what is displayed
// passing the values in the wrong order 
displayThis('This suppose to be the username', 'Jake'); 

// You can manipulate the value of the parameter variable 
// inside a function - and take note of the from variable 

function displayThis2(from, text){
    from = "*" + from + "*";
    alert(from + " : " + text);
}

let from = "Jane"; 

displayThis2(from, "Is this meant to be another greeting"); 
// (what is displayed) *Jane* : Is this meant to be another greeting

// the from variable declared outside is acually different 
// than the one declared as a parameter 

alert(from); // this will display Jane

/* 
 parameter is a variable listed inside the () brackets in the 
 function declaration 
 
 argument is the value that is passed to the function when it 
 is called 
*/

// now for some interesing variations and takes on the content 

// take note of the function above displayThis2 requires 2 
// parameters to do its job 

// what if you only provide one value 

displayThis2("Joey");

// the above code will not produce an error because you are 
// missing a parameter - since the text variable is not given 
// anything - it becomes - undefined 

// so the output would be 

// *Joey* : undefined 

// Can we deal with this? Yes - but the solution is quite 
// weird - the following is called, assigning a default value 
// if the value is omitted 

function displayThis3(from, text = "no text given"){
    alert( from + " : " + text); 
}

displayThis3("Jen"); // Jen : no text given 

// could even try this ... 

function displayThis4(from, text = anotherFunction()){ 
    // anotherFunction() would only be executed if no 
    // text was given ... whatever the result is, it 
    // would become the value of text ... 
}

// I was reading that since there are many advancements in JS
// that the above code style was only introduced recently 
// Back in the day you had to do the following: 

function displayThis5(from, text){ 
    if (text === undefined){ 
        text = "no text given"; 
    }

    alert(from + " : " + text); 

    // to simplifiy the if...then statement above you could 
    // have also done the following  

    text = text || "no text was provided";
}

// The reason for learning the ^above code is to understand 
// the user - what if they haven't provided all the information 
// you had requested ... what do you do? how do you progress? 
// Providing default values would enable the program to continue 
// and you could present error messages (feedback) back to the
// user as required  

// just one more ... 

function showCount(count){ 
    // if count is underfined or null, show "unknown"

    alert(count ?? "unknown"); 
}

showCount(0);       // display 0 
showCount(null);    // display unknown 
showCount();        // display unknown

//============================================================
/*
 Now even though this entire code10 page is dedicated to 
 functions - all of the above functions have actually been 
 'procedures' - blocks of code that have done work - but 
 nothing was returned ... 

 Remember now that there is a difference between 
 procedures and functions - here is JS there isn't a different 
 keyword in the heading to differeniate between the 2 

 Just remember this - a function needs to return a single 
 value & requires a variable to take on that value  
 whereas a procedure once called - does work ... 
*/ 

// Functions - returning a value 

function sum(num1, num2){ 
    return num1 + num2;
    // this return directive/keywword is the most important 
    // piece - when it is executed, the code will kick you 
    // out of this block and give to the variable, the value 
    // calculated / or / stated 
    
    // return can be anywhere and there can be mutiple instances
    // of it in a single function ... just depends on how you 
    // are going to use it ... 
}

let resultSum = sum(4,5); 
// this variable is assigned the value of whatever it returned
// from the function call   
alert(resultSum); 

// another example 

function checkMark(testMark){ 
    if (testMark >= 50){ 
        return "You passed the test"; 
    } else { 
        return "You FAILED the test";
    }
}

let testMrk = prompt("What was your mark for the test?", ''); 
alert(checkMark(testMrk)); 

// another example 

function verifyBal(bal){
    if (bal >= 0){ 
        return true; 
    }
    else { 
        return false; 
    }
}

let balance = prompt("What is your current balance? ", ""); 

if (verifyBal(balance)){ 
    alert("You may proceed with the purchase"); 
}
else{ 
    alert("You cannot proceed with the purchase"); 
}

/* 
 just to remember 
 return and the code that follows must always be on one line 
 do not ever make a new line - even if you think its for 
 readability 

 this code is incorrect 
return 
    (a * x * x) + (b * x) + c; 

 it should be 
return ((a * x * x) + (b * x) + c); 

*/    


// One of the things that needs to be discussed is the naming 
// of functions ... we can come up with some interesting names 
// but in the progrmming space - there are some words to help 
// ... this help ... helps to understand the purpose of the 
// function just by reading the name of the function 

// think back to the 1st semester and the use of the prefixes
// when naming variables - this helped to understand the 
// datatype of the variable being used without the need to go 
// back to the declarations section 

/*
 showMessage()  // shows a message 
 getAge()       // returns the age 
 calcSum()      // calcuates the sum and returns the result
 createForm()   // creates a form (and returns it ??)
 checkBalance() // checks the balance, returns true/false 

 the above list is not perfect - but its a start 
*/

// Again, a function should do at most, one action
// if there is more than one thing to get done, best consider 
// placing the code in separate functions  

// when I read this above comment - i tried to look for a 
// decent example - because I thought that everyone would 
// at least consider this - splitting the code into smaller 
// pieces - but its not always the case 

// In the following code - both functions will display 
// if the number from 2 to n is a prime number

// This first function uses a label to jump the code 
// this was discussed in a previous code file 
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
  }

  // This second variation uses 2 functions to handle 
  // the same process 
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
}
  
function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
}

// The second variation would be easier to read and understand 
// but when you consider the possibilities - moving forward and 
// after learning JS - I would think that the first one is quite 
// an interesting take and more efficient code to consider 

// just a last point to note 
function sayHi() { 
    alert("Hello");
}

// we know this above code - declaring a function 
// executing some code 

// but there is another way to deal with the function code 

let sayHello = function(){
    alert("Hello"); 
}; 

// take note of the syntax (the semi-colon at the end)
// the above code is known as a function expression
// its another sort of short-hand version of the code for 
// function 

alert(sayHi); // no brackets - so what will be displayed? 

// a function is a special kind of value

let func = sayHi; // no brackets ?? so what does this mean
//this is copying func is assigned the value of the sayHi function 

func();  // this copied version will work and so will the next 
sayHi(); 

// Callback functions 

function ask(question, yes, no) {
    if (confirm(question)) 
        yes()
    else 
        no();
}
  
function showOk() {
    alert( "You agreed." );
}
  
function showCancel() {
    alert( "You canceled the execution." );
}
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// The idea is that we pass a function and expect it to be 
// "called back" later if necessary. 
// showOK becomes a callback for yes()
// showCancel becomes the callback for no()

// we can use function expressions to simply the ask function 

function ask2(question, yes, no){
    if (confirm(question))
        yes(); 
    else 
        no();
}

ask2(
    "Do you agree?",
    function() { alert("Agreed");},
    function() { alert("You cancelled the execution");}
);

// the ^above functions have no name and are called 
// anonymous 

// in JS - this something programmers would do to make the 
// code more simpler to write ... 

// Now in the following code - I don't think we would 
// try this - but its good to know ... 

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  // the function is created inside this if..then block 
  // so it is local to only this block and not accessible 
  // to anyone outside 
  function welcome() {
    alert("Hello!");
  }
} else {
  // same comment here as the one made above 
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined

// we could use function expressions 

let age2 = prompt("What is your age?", 18);

let welcome2;

if (age2 < 18) {

  welcome2 = function() {
    alert("Hello!");
  };

} else {

  welcome2 = function() {
    alert("Greetings!");
  };

}

welcome2(); // ok now

// and we could simplify the code even further ... 

let age3 = prompt("What is your age?", 18);

let welcome3 = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome3(); // ok now

