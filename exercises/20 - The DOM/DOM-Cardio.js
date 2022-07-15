/* eslint-disable */

// Make a div
const jsDiv = document.createElement('div');

// add a class of wrapper to it
jsDiv.classList.add('.wrapper');

// put it into the body
document.body.appendChild(jsDiv);

// make an unordered list
const jsUl = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

jsDiv.innerHTML = jsUl;

// create an image

const jsImg = document.createElement('img');

// set the source to an image
jsImg.src = 'https://place-puppy.com/700x500';

// set the width to 250
jsImg.width = '250';

// add a class of cute
jsImg.classList.add('cute');

// add an alt of Cute Puppy
jsImg.alt = 'Cute Puppy';

// Append that image to the wrapper
jsDiv.appendChild(jsImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const childDiv = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

// jsUl not yet in HTML so look for it with queryslector
const jsUlElement = jsDiv.querySelector('ul');

// Use the above variable which grabs the ul element then insert adjacent html using the childDiv content.
jsUlElement.insertAdjacentHTML('beforebegin', childDiv);

// NOTE: YOu could have also done above using create range and document fragment.

// add a class to the second paragraph called warning
// remove the first paragraph
const selectDiv = jsDiv.querySelector('.myDiv');
selectDiv.children[1].classList.add('warning');
selectDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const cardHTML = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>Their height is ${height} ft and ${age} years old. In dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
    </div>
  `;
  return cardHTML;
};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards')

// make 4 player cards using generatePlayerCard
let cardHTML = generatePlayerCard('Evan', 34, 6);
cardHTML += generatePlayerCard('Snickers', 56, 3);
cardHTML += generatePlayerCard('Frank', 56, 3);
cardHTML += generatePlayerCard('John', 56, 3);
// NOTE: There are many ways to perform the above. One would be to change the const to let cardHTML and then run cardHTML = cardHTML += generatePlayerCard('new name', 34, 6); three more times.
// NOTE: You could also create a variable for each of the above. Or you could take in an array of names nd loop over them.

// Or:
// * cards.insertAdjacentHTML('afterbegin', generatePlayerCard('Snickers', 45, 3)); // Then run this 4 times.
cards.innerHTML = cardHTML;
// append those cards to the div
jsDiv.insertAdjacentElement('beforebegin', cards);
// put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const jsButtons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard() {
  const buttonClicked = event.currentTarget;
  // console.log(event.currentTarget);
  // TODO: Create function to delete cards.
  // * buttonClicked.parentElement.remove();
  buttonClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
jsButtons.forEach(button => button.addEventListener('click', deleteCard));