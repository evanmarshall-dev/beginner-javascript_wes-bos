/* eslint-disable no-console */
const myParagraph = document.createElement('p');
// console log it to determine if the element was added before putting onto page
// Add content to p
myParagraph.textContent = 'I am a paragraph.';
// Add class
myParagraph.classList.add('specialP');
console.log(myParagraph);

// Create a new image element
const myImage = document.createElement('img');
// Add a source
myImage.src = 'https://picsum.photos/600';
// Add alt
myImage.alt = 'rando photo';
// Log to console
console.log(myImage);

// Create a new div element
const myDiv = document.createElement('div');
// Give it a class
myDiv.classList.add('wrapper');
// log to console or show what is saved to the JS but not on page yet
console.log(myDiv);

// Appendchild allows us to inject JS created HTML into the DOM at child element. It can be called against any node (i.e. myDiv or myParagraph).
// You can do a const of document.queryselector for body, but the document give us access to body element so this way is less code.
// * document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);
// These are three calls in a row so it can cause a poor experience for the user. This can be solved by putting the document.body.append after the calls. See above example.

// If you want to add to the top of previous element
const heading = document.createElement('h2');
heading.textContent = 'Cool beans!';
// Takes two parameters: where you want it tpo be placed (afterbegin) and what element to append (heading).
myDiv.insertAdjacentElement('afterbegin', heading);
