// * console.log('It Works!');

// Functions are created or defined then called.
// There are a few ways to define a fxn.

// Now to create global variables from the data within the code block below
// * let bill = 100;
// * let taxRate = 1.15;
// This is a very dirty way to create an application so we will clean it up and create variables to pass into fxn as parameters (i.e. billamount and taxrate).

// This is a fxn definition
// I have passed in a default parameter for taxRate
// * function calculateBill(billAmount, taxRate = 1.15, tipRate = 0.2) {
// This is the fxn body or block
// *  console.log('Running Calculate Bill.');
// Below is a temp variable used only inside the fxn and once returned it becomes a garbage variable
// * const total = 100 * 1.15;
// * const total = billAmount * taxRate + billAmount * tipRate;
// * console.log(total)
// Returning a fxn allows us to call it outside of the block
// *return total;
// * }

// This is a call or run or invoke
// We need to capture the return of a fxn by calling the fxn and defining it within a variable
// Now we pass in values for the parameters making them arguments (i.e. 100 and 1.15).
// You can also pass in an indirect value below as an argument. Meaning that you declare 150 as a variable and pass in the variable.
// * const myTotal = calculateBill(150);
// console.log(myTotal);
// If you want to make it so that the second parameter kicks back to default, but not third then you need to pass in UNDEFINED for the second paramter to avoid error.
// * const myTotal4 = calculateBill(130, undefined, 0.15);
// console.log(myTotal4);
// Doing it this way prevents the need to re declare a variable.
// * const myTotal2 = calculateBill(225)
// Re-assign a variable
// * bill = 200;
// * const myTotal2 = calculateBill();
// You can also pass in expressions as arguments.
// * const myTotal3 = calculateBill(20 + 20 + 30 + 20, 1.15);
// console.log(myTotal3);
// * console.log(myTotal, myTotal2);
// You can even put the fxn calculateBill() within the curly braces to get same value
// * console.log(`Your total is $${myTotal}`);

// Another Example FXN Definition
// What is happening in the fxn below is the fxn looks for variable firstName within the fxn code block or fxn scope and if it doesn't find it then it looks at a higher scope.
// * function sayHiTo(firstName) {
// *   return `Hello ${firstName}`;
// * }
// * const greeting = sayHiTo('Evan');
// * console.log(greeting);

// Example where we use a fxn as an argument
// It is to reuse parameters when in two different fxns or scopes.
// * function doctorize(name) {
// *   return `Dr. ${name}`;
// * }

// * function yell(name) {
// *   return `HEY ${name.toUpperCase()}`;
// * }

// First the doctorize fxn then passes that value into the yell fxn.
// * const passIn = yell(doctorize('Hank'));
// console.log(passIn);
