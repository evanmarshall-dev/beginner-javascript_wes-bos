/* eslint-disable no-console */
// TITLE: Working with HTML and Strings

// You can grab HTML similar to innerText, using innerHTML.
// * const item = document.querySelector('.item');
// * console.log(item.innerHTML); // This is a getter.
// Lets use it as a setter:
const width = `500x400`;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute Picture`;
const myHTML = `
  <div class="wrapper">
    <h1>Hey, how are ya?</h1>
    <h2>Check out this picture below.</h2>
    <img src="${src}" alt="${desc}" />
  </div>
`;

// * item.innerHTML = myHTML;

// NOTE: One downside of this is that the innerHTML is simply a string and not an element you can manipulate with JS such as myHTML.classList.add('special);

// NOTE: myHTML only becomes an element once it is dumped into the DOm using the item.innerHTML = myHTML; method. So to manipulate it as an element you need to use event listeners.

// Example:
// * const itemImage = document.querySelector('.wrapper img');
// * itemImage.classList.add('round');
// * console.log(itemImage);

// NOTE: You can also attack this issue by turning a string into a DOM element.
const myFragment = document.createRange().createContextualFragment(myHTML); // createRange is a collection of elements which we can work with. You append creatContextualFragment to the range and then pass in the string via variable myHTML.
console.log(myFragment); // displays documentFragment in console which we can manipulate such as below:
console.log(myFragment.querySelector('img')); // Still not on the page but we can now select them as elements instead of a string.
document.body.append(myFragment); // Can also use appendChild or appendAdjacent.

// NOTE: So, you can fix innerHTMl being a string you cannot manipulate by using event listeners or createContextualFragment.

// TITLE: Security Pitfalls of this Method

// NOTE: HTML can be injected into the strings. This simply manipulates HTML, but Cross Site Scripting (XSS) can occur where scripting is introduced into your strings for malicious purposes. One method used is by inserting an onload event into an image tag for example.

// NOTE: In the security videos it will be discussed how you can scrub your strings prior to injecting it into your site.
