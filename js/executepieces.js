/*
    Program: Execute pieces of Code (executepieces.js) 
    Programmer: Jessel Sookha
    Date: 29 July 2022 
*/

/*
Please use the following file to run any source code from the 
files named code1 to code9

The reason is that there is so much code there to read and 
go through, if you attempt to run the code - it will be too 
much. 

So when you come across a piece of code you wish to run and see 
the result - copy the code from the the code file and paste it 
here after this comment 
*/

//the following code is from code8 
//=============================================================
let userAge;
let userCount = 0; 
let sumAge = 0; 
let avgAge = 0;

userAge = prompt ("Enter age [999 to stop]", ""); 

while (userAge !== '999'){
    sumAge = sumAge + +userAge; 
    userCount++; 
    userAge = prompt ("Enter age [999 to stop]", ""); 
} 

avgAge = sumAge / userCount; 
alert("The average age is " + avgAge); 
//=============================================================
/*
 when you are done - delete the code in between the 
 equal to ======== lines above and paste some other code 
  
 take the time to try out as much code as possible 
 if I have made a mistake in the code - then make note of 
 it and we'll continue the discussions through our online 
 platforms or in class
*/