// There are 7 JS types.
// String, Number, Object, Boolean, Null, Undefined and Symbol.
// TODO: Remember with acronym SNOBUSN
// Object is a special one and all others are called primitive.

// Below comment will disable eslint so we can display double quotes.
/* eslint-disable */
/*
 ! STRINGS
 */
/*
 * const name = 'Evan';
 * const middle = 'Douglas';
 * const last = `Marshall`;

 * let sentence = "She's so cool";
// OR
 * sentence = "She's so cool";
// OR
 * sentence = `She's so cool`;
 */

// With back ticks you can put strings on multiple lines
/*
 * const multiLine = `Hello

 * I am a multiple
 * line string!`;

 * const hello = 'Hello my name is ' + name + '. Nice to meet you.';
// OR
 * const hello2 = `Hello my name is ${name}. Nice to meet you. I am ${
 *  55 + 22
 * } years old.`;
 */

// Back ticks can be used when creating HTML from JS as well.
/*
 * const html = `
 * <div>
 *   <h2>${name}</h2>
 *   <p>${hello}</p>
 * </div>
 * `;

 * document.body.innerHTML = html;
 * console.log(html);
 */

/*
 ! NUMBERS
 */
// You can create an integer or a float which is a number with decimal.
// With numbers you can perform mathematics BEDMAS.
// When you try to perform a math function with mixed types, for example a number 1 added to a string "3" will concatenate and create "13."
// When you try to perform a math function with a couple of strings of numbers, for example "3" * "7" will convert them to a number as solution to the math function, however doing this with an addition or plus will still concatenate them as two strings. Conversion happens with all types of math operators except addition.

//? HELPER METHODS
// Related to math fxns you have math helper methods found when typing Math.
// i.e Math.floor() will give you the rounded down number and Math.ceil() will give you the rounded down up. Math.random() will give you a random number between 0 and 1.
// Two other operators are called the modulo and power. Modulo provides how much remains.
// You display "to the power of" by using two multiplication operators **.

//? Example modulo
/*
 * const smarties = 55;
 * const kids = 4;
 * const eachGets = Math.floor(smarties / kids);
 * console.log(`Each kid gets ${eachGets} smarties.`);
 * const leftOver = smarties % kids;
 * console.log(`Dad gets the remaining ${leftOver} smarties!`);
 */

// Floating Point Math is when you add two decimal numbers will have a trailing number at the end of the answer. This glitch can be an issue when using money calculations. There is a way to fix this by using cents to keep out decimals and calculating the answer to return value with cents.
// Javascript has a maximum positive and minimum negative value, for example run 1000 ** 200 will output infinity.

//? NOT A NUMBER (NaN)
// NaN is a number and occurs when you try to perform a math operation with a value which isn't a number.

/*
 ! OBJECTS
 */
// Objects are used to group multiple items together inside curly brackets. Inside the object brackets are properties and values separated by a colon.

//? Example Object
const person = {
  first: 'Evan',
  last: 'Marshall',
  age: 34,
};
console.log(person);
// How to access a property you can use dot or bracket notation
console.log(person.first); // This is logging to console dot notation
console.log(person['last']); // This is logging to console bracket notation
console.log(person['age']);

/*
 ! SYMBOL
 */
// Symbols are used to create advanced or unique properties.

/*
 ! BOOLEAN
 */
// Something that is either true or false. It can be calculated, too. For example if you console log 3 > 4 will give you a false value.
// You should almost always use triple equals === versus double ==
// Triple equals checks to make sure both the value and type are the same.
