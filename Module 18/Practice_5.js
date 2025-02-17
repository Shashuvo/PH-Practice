/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1=11, num2=28;
 

//simple if-else

if(num1 > num2){
    console.log(2*num1);
}
else{
    console.log(num1+num2);
}

const num3=28, num4=11;

// Ternary operator;

if(num3 > num4 ? console.log(2*num3) : console.log(num3+num4));