// Select each card's button
const cardBtns = document.querySelectorAll('.card button');
const modalOuter = document.querySelectorAll('.modal-outer');
const modalInner = document.querySelectorAll('.modal-inner');

// Run function each time button clicked in add event listener below
function handleCardBtnClick(e) {
  const button = e.currentTarget;
  // Select button within closest card to make sure click event is selecting only that card
  // .closest is like query selector all except it climbs up the nested tree instead of looking down the tree
  const card = button.closest('.card');
  // Grab the image source using query elector and specifying src
  const imgSrc = card.querySelector('img').src;
  // Grab the description in card using it's HTML dataset
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // Populate modal with new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
  `;

  // Show modal
  modalOuter.classList.add('open');
}

// Loop over each button and listen to click
cardBtns.forEach((button) =>
  button.addEventListener('click', handleCardBtnClick)
);
