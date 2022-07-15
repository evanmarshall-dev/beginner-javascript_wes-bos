/* eslint-disable no-console */

// TITLE: EVENT LISTENERS

// * const butts = document.querySelector('.butts');
// * const coolButts = document.querySelector('.cool');

// You can create a named FXN and good practice to name it handle...something.
// * function handleClick() {
// *   console.log('Your butt got itself clicked!!');
// * }
// Event listeners take two arguments: first, the type of event, second, the callback FXN to be called when event is fired.
// * butts.addEventListener('click', handleClick); // You do not have to call the FXN with brackets after FXN name unless you are calling another FXN. IF you do the browser load will call the FXN.

// * coolButts.addEventListener('click', handleClick);

// Having handleClick FXN outside of add event listener allows you to call on one FXN for multiple event listeners.
// Also, if you were to remove an event listener it works the same way where you provide event you want to stop listening and FXN you want to stop listening for.
// * butts.removeEventListener('click', handleClick);

// Definition: Binding is when you bind a FXN to an element during a specific event. When you remove such as above you are removing that binding.
// An anonymous FXN can not be unbound or removed because there is no way to reference the FXN.

// NOTE: We do not want to have to select 10 of the buy buttons and perform an add event listener 10 times.

// The below query selector usually would be put at the top of the document with all query selectors.
// Therefore listen on multiple items using query selector ALL:
// * const buyButtons = document.querySelectorAll('button.buy');

// Add event listener is not a method on buybuttons so you have to loop through each button and attach event listener to each one.
// You can confirm this is an available method by checking the prototype within the console when logging buyButtons. The prototype is found by expanding the console log for the button and seeing available methods.

// * function handleBuyItemClick() {
// *   console.log('Buying Item');
// * }

// Anything put within tbe forEach FXN will happen 10 times or however many time there is an item or button with the class of buy. If it is within a FXN.

// * function attachBuyButtonListener(eachBuyButton) {
//   // forEach will run a FXN for each item in our node list.
//   // Common in forEach to pass in an anonymous FXN.
//   // That anonymous FXN is going to give you an argument for each of the items (i.e. buyButton or anything you want to name it due to it being a parameter)
// *   console.log('Binding the buy button');
// *   eachBuyButton.addEventListener('click', handleBuyItemClick);
// * }

// * buyButtons.forEach(attachBuyButtonListener);

// NOTE: STEP BY STEP FOR WHAT WE DID ABOVE
/**
 * 1. Create a variable for selecting ALL buttons with the class of buy, using query selector ALL.
 * 2. Create a FXN which will handle all clicks of said buttons or "buying" of each item. Have this log a message to the console.
 * 3. Create FXN which will attach an event listener to each click. This will create a bind between each button and each click. For this FXN a parameter placeholder will be named eachBuyButton and will be passed into the FXN. To each buy button we will add an event listener for each click we will run the above FXN buyItem.
 * 4. We will then attach the method of forEach to the initial FXN of buyButtons, which selects each button with the class of buy. For each time there is an instance of a buy button we will run the FXN attachBuyButtonListener which adds an event listener to each click of said button.
 */

// TITLE: EVENTS: TARGETS, BUBBLING, PROPAGATION AND CAPTURE

// Create variable defined as selecting ALL buttons with the class of buy.
const buyButtons = document.querySelectorAll('button.buy');

// Create a FXN to handle the buttons being clicked. This will be our handler or callback FXN.
function handleButtonClick(event) {
  // * console.log('You just clicked, therefore you just bought!');
  // * console.log(event); // This shows info from event object stored in the PointerEvent in console.
  // * console.log(event.target); // This shows info of each button clicked or target.
  // * console.log(parseFloat(event.target.dataset.price));
  // * console.log(typeof parseFloat(event.target.dataset.price)); // This will show the price found in the data-price attribute in the button.
  // If you put the typeof parameter prior to event.target.dataset.price you will see that it is a string. You can use parseFLoat to change to integers and versus parseInt, parseFloat keeps decimals.
  // It is good practice to store event.target in a variable and then add .whatever to the end of the variable.
  // * const button = event.target;
  // * console.log(button.textContent);
  console.log(event.currentTarget); // Event Current Target is the item which fired the event listener, whereas event target is what is actually being clicked on. For example, say you had the text content of the button have the number in a strong tag and you clicked the number. The current target would be the button and the target would be the strong tag.
  // Most often you will want to use currentTarget.
  // NOTE: If you were to use window.addEventListener you would learn that when you click on an element such as a strong tag in a button you are also clicking on the button, the body, the html, the window, the browser, etc. which is called propagation.
  // Stop the event from BUBBLING up or PROPAGATION:
  event.stopPropagation();
}

// Example to show window events:
window.addEventListener(
  'click',
  function (event) {
    console.log('You Clicked the Window!');
    console.log(event.target); // Shows what in the window you clicked on.
    console.log(event.type); // Type of event (i.e. click).
    console.log(event.bubbles); // If this event is going to bubble or not.
    // * event.stopPropagation();
  },
  { capture: true }
);

// NOTE: The way the CASCADE happens (capturing the click from document - html down to the button and then bubbling back up to the html - document). Above we stopped the BUBBLING by using stopPropagation, but we can also stop the start of the cascade down by passing in an OPTIONS object AFTER the window.addEventListener({}) curly brackets (using a comma).
// NOTE: This will change the direcrion of the cascade so that it stops on the capture (window down to buttpn) instead of the bubble (button up to window) and the handleButtonClick FXN will never run. We have stopped it at the window level.
// NOTE: Most of the time you will listen for events on lower level and stop it from bubbling using the evemt.stopPropagation().

// For each buyButton you pass in a placeholder for a single button which you attach method of add event listener for each time the button is clicked.
buyButtons.forEach(function (singularBuyButton) {
  singularBuyButton.addEventListener('click', handleButtonClick);
});

// NOTE: Now that we have the event of a button click looped through each button, how do we get info on which button is clicked?
// NOTE: That information is available in the EVENT object and this can be accessed by modifying the callback FXN/Handler with a single parameter (i.e. parameter can be called event or anything you want). In the console you will see all of this info stored in "PointerEvent" and there is a lot. For this example we will be using the PointerEvent of "target" and "currentTarget."

const photoEventListener = document.querySelector('.photo');

photoEventListener.addEventListener('mousemove', function (event) {
  console.log(event.currentTarget);
  // * console.count(event.currentTarget);
  console.log(this); // This is a special reserve word in JS which calls on the element the event is called on. Therefore whatever is to the left of the DOT in the addEventListener.
  // It is not good to use THIS in event listener FXN as it is not the same element when using arrow FXNs.
});
