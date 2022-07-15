/* eslint-disable no-console */
const evan = document.querySelector('.evan');
// * console.log(evan);
// Difference between elements and nodes
// * console.log(evan.children); // Only child elements
// * console.log(evan.childNodes); // Elements and content

// * console.log(evan.children); // Lists all elements within evan.
// * console.log(evan.firstElementChild); // First element within evan therefore em.
// * console.log(evan.lastElementChild); // Last element within evan therefore strong.
// * console.log(evan.previousElementSibling);
// * console.log(evan.nextElementSibling); // Next element on same level as evan, therefore image.
// * console.log(evan.parentElement); // Parent to evan element is body.

// Below example on how to remove elements from the DOM.
const p = document.createElement('p');
p.textContent = `I will be removed`;
document.body.appendChild(p);

p.remove();
// Log to console to see that the element is still save in JS memory.
console.log(p);
