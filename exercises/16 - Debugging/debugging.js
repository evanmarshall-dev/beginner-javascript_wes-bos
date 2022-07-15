const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // * debugger;
  console.log(person.name);
  // Can also do error which simply changes the look of it in the console
  // console.error(person.name);
  // console.warn(person.name);
});

// Console.table works on objects with the same properties to create a table
console.table(people);

//! Console Methods

//! Callstack or Stack Trace
// Stack trace will tell what FXN called what FXN. See go and greet FXN below.
// This will generate an error in browser console which will output the call stack showing where the error occurred and when the FXN causing the error was called with the line number and file name.

//! Grabbing Elements
// You can select HTML elements in the browser debug tool and then switch to the console and type $0 and it will spit back what you have selected in the HTML elements tab.
// With this element selected in console you can do things like $0.value to spit back what you have typed in the HTML input (if we selected an input for example).
// $0 means the last element clicked and $1 is second last and so on.
// $ doesn't work if jQuery is on the page.

//! Breakpoints
// when you put debugger; in the JS then it creates a breakpoint which essentially pauses JS in that time.
// Now you have access to the debugger tab in browser dev tools which allows you to step through each line of the JS code.
// Instead of adding debugger to code you can also click the debugger tab in browser tools and click area of code to create a breakpoint/pause in the JS.

//! Scope

//! Network Requests

//! Break On Attribute
// You can click on element that is changing in HTML inspector dev tools and right click to break on attribute modifications to see the corresponding JS that creates changes to the element.
// You can break on many things such as XHR which is whenever a fetch command is placed or you can filter down the list of "filter by event type" to create a break on mouse>click event for example.

//! Some Setup Code

// To group a bunch of consoles together
// Make sure the groupEnd has the same string as the original console.group.
// Can also start with console.groupCollapsed to start with the console groups collapsed.
function doAlotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey I am one');
  console.warn('Watch out');
  console.error('Hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // Can also do console.count to determine how many times a FXN runs. This can help to show you how many times a FXN is running when it shouldn't be.
  // * console.count(`Running doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // This will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

//! A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
