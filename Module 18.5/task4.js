// 4. Checking if it's an Array

// 1. Create different variables, each containing either an array or a non-array value.

const number=11;

const numbers=[2, 5, 6, 6, 1];

const names=['Abul', 'Babul', 'Tabul'];

const str='ros g o ll a';

// 2. Now use isArray to check if each variable is an array.

console.log(Array.isArray(number));

console.log(Array.isArray(numbers));

console.log(Array.isArray(names));

console.log(Array.isArray(str));

// 3. Print a message to the console indicating whether each variable is an array or not.

if((Array.isArray(number))){
    console.log("It is an Array");
}
else{
    console.log("It is not an Array");
}

if((Array.isArray(numbers))){
    console.log("It is an Array");
}
else{
    console.log("It is not an Array");
}

if((Array.isArray(names))){
    console.log("It is an Array");
}

else{
    console.log("It is not an Array");
}

if((Array.isArray(str))){
    console.log("It is an Array");
}

else{
    console.log("It is not an Array");
}
