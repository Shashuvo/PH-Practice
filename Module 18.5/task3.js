// 3. Checking Array Membership with ‘includes’




//3. Print a message to the console indicating whether the element is present in the array or not.

// 1.Create an array of books containing different book.

const books=['C', 'EEE', 'C++', 'DSA', 'JS'];
console.log(books);

//2. Use the includes method to check if the array contains a javascript book.

console.log(books.includes('JS'));

//3. Print a message to the console indicating whether the element is present in the array or not.

if((books.includes('JS'))){
    console.log('Book Found');
}