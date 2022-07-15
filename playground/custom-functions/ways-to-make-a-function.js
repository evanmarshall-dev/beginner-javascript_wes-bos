// Different Ways to Call a Function.

// Function Declaration.
// * function doctorize(firstName) {
// *   return `Dr. ${firstName}`;
// * }

// Anonymous Function.
// Not applicable here, but used in fxn callbacks and Immediately Invoked Function Expression (IIFE)s.
// * function (firstName) {
// *   return `Dr. ${firstName}`;
// * }

// Function Expression.
// Store the function as a value of a variable.
// It's technically an anonymous function however browsers will infer the name from the variable name.
// Function Expressions are important in hoisting in that JS does not hoist them above a FXN call like it does for FXNs using the function keyword.
// So, if I were to call the doctorize FXN prior to it being defined, it will not work unless it is a FXN defined with the FXN keyword NOT a variable.
// * const doctorize = function (firstName) {
// *   return `Dr. ${firstName}`;
// * };

// Arrow Functions.
// They do not have their own scope in regard to the "this" keyword and they are great for one-liner callback FXNs.
// Implicit return is returning the FXN value without typing "return".
// If only one parameter you can actually remove the brackets around those as well.
// * const inchesToCm = (inches) => inches * 2.54;

// Points to consider.
// Returning Objects.
// Returning object in function declaration.
// * function profileOfBaby(firstName, lastName) {
// *   const baby = {
// *     name: `${firstName} ${lastName}`,
// *     age: 0,
// *   };
// *   return baby;
// * }

// Returning object in function expression.
// * const profileOfBaby = function(firstName, lastName) {
// *   const baby = {
// *     name: `${firstName} ${lastName}`,
// *     age: 0,
// *   };
// *   return baby;
// * }

// Returning object in arrow function.
// If you were to reduce the arrow function down to one line and remove the return then JS will confuse the curly brackets for the object with the curly brackets for the FXN code block.
// The above issue can be fixed by putting regular brackets around the curly brackets.
// * const profileOfBaby = (firstName, lastName) => {name: `${firstName} ${lastName}`, age: 0,};
// * const profileOfBaby = (firstName, lastName) => ({ name: `${firstName} ${lastName}`, age: 0 });

// IIFE.
// Indicated by putting the whole FXN inside parenthesis and ending the function with an empty parenthesis.
// You can pass in parameters and pass in argument in the empty parenthesis at the end.
// * (function (age) {
// * console.log('Running the anonymous function');
// *   return `You are cool and age ${age}`;
// * })(10);

// Methods.
// Methods are functions that live within an object. For example in console.log() log is the FXN which lives inside the object of console.
// evan.sayHi is the method below.
// * const evan = {
// * name: 'Evan Marshall',
// Method
// * sayHi: function () {
// "this" is equal to the object it is called in, but does not work with arrow FXN.
// * console.log(`Hey ${this.name}`);
// * console.log('Hey Evan');
// * return 'Hey Evan';
// * },
// Short hand method
// Removes colon and function keyword and JS considers the yellHi both the object property set to the function called yellHi.
// * yellHi() {
// * console.log('HEYYY EVAN');
// * },
// Write with arrow FXN
// * whisperHi: () => {
// * console.log('hiii evan...');
// * }
// * };

// Callback Functions.
// Examples are when someone clicks something run the FXN or after some amount of time run FXN.
// Click Callback
// * const button = document.querySelector('.clickMe');
// * console.log(button);
// Callback below with evan.yellHi and does not need to have parenthesis. It is called once the clickMe button is clicked.
// * button.addEventListener('click', evan.yellHi);
// You can also run FXN by passing in code inside an anonymous FXN like below.
// * button.addEventListener('click', function () {
// *   console.log('Nice clicking!!');
// * });

// Timer Callback.
// * setTimeout(evan.yellHi, 1000);
// OR
setTimeout(function () {
  console.log('DONE!!!');
}, 1000);
