// * console.log('It works!');

// TITLE: 1. Global Variables:
// NOTE: Global variables are available everywhere in the code.
// NOTE: There is also methods on the window object such as window.setTimeout which are also global variables.
// NOTE: Functions can also be globally scoped and accessed via window object.

// EXAMPLE:
// * const firstName = `Evan`;

// TITLE: 2. Function Scope:
// NOTE: Variables created inside the FXN (i.e. const hair) are only available inside that FXN.
// NOTE: Below when the FXN runs it first looks for variable age which is not inside fxn so it goes up a level. Therefore variables can leak into FXN, but cannot leak outside FXN such as variable hair.
// NOTE: You can name a variable the same name which is not in the same scope however this is not recommended because it over-shadows the variable at the higher scope so that it can no longer be used (i.e. this is called a shadow variable).

// EXAMPLE:
// * const age = 100;

// * function go() {
// Below log will work.
// * console.log(age);
// * const hair = 'red';
// Below log will work.
// * console.log(hair);
//  }

// * go();

// Below log will work.
// * console.log(age);
// Below log will not work.
// * console.log(hair);

// TITLE: 3. Block Scope:
// NOTE: Below the isCool curly braces is FXN scoped and the if statement is block scoped.
// NOTE: Var variables are FXN scoped and Let/Const variables are block scoped.

// EXAMPLE:
// * function isCool(name) {
// *   let cool;
// *   if (name === 'Evan') {
// *     cool = true;
// *   }
// *   console.log(cool);
// *   return cool;
// * }

// EXAMPLE: #2
// * for (let i = 0; i < 10; i++) {
// *  console.log(i);
// * }

// TITLE: 4. Scope Lookup:

// Created variable called dog.
// * const dog = 'Snickers';

// FXN which logs variable called dog.
// * function logDog() {
// *   console.log(dog);
// * }

// FXN go creates another variable called dog and runs the FXN logDog.
// * function go() {
// * const dog = 'Sunny';
// When logDog FXN is called will it call Sunny or Snickers?
// Say you passed in an argument to the logDog in the go FXN then the output in the console would become that argument as JS takes the first argument of the defined FXN.
// * logDog('Rufus');
// Lets say you pass in dog to logDog FXN, it would then output Sunny because it doesn't care the name of the variable you pass in but only the value of that variable.
// * logDog(dog);
// JS uses lexical scoping or static scoping language, which means that it looks at where a FXN is defined rather than where it is ran.
// The logDog FXN is defined outside of the go FXN so it uses the first const dog which is found when the FXN looks up to the closest variable.
// * logDog();
// * }

// * go();

// TITLE: 5. Variable Best Practices:
// NOTE: Unless you attach a variable to window (i.e window.globalvariable), it is very difficult to create a global variable.
// NOTE: FXNs are scoped the exact same as variables. Therefore FXNs are scoped to the parent FXN.from(

// EXAMPLE:
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  // This one would work because it is inside the scope of the parent FXN.
  yell();
}
// This one would not work because it is outside the scope of the yell FXN.
yell();
