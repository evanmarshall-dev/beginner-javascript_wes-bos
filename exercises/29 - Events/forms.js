/* eslint-disable no-console */
// TITLE: Prevent Default & Form Events
// NOTE: There are certain elements which have default actions such as a link is to open up the URL, but we might want to prevent this from happening so that we can utilize it in JS.

const linkDefault = document.querySelector('.link');

// Default example:
// * linkDefault.addEventListener('click', function () {
// *   console.log('You clicked the link!');
// * });

// Using prevent default
linkDefault.addEventListener('click', function (event) {
  console.log('You clicked the link!');
  const changePageMessage = confirm('Are you sure you want to navigate to this page?');
  // * console.log(changePageMessage);
  if (!changePageMessage) {
    // This is when CANCEL is selected on confirm message therefore prevents default or page change. If they select OK then the default action fires which is going to the linked page.
    event.preventDefault();
  }
});

// NOTE: Other common default events on a page are when a SUBMIT button is clicked.

// For example:
// Select the form with the NAME equal to signup
const signupForm = document.querySelector(`[name='signup']`);

signupForm.addEventListener('submit', function (event) {
  // * console.log(event);
  event.preventDefault();
  // Why we would want to use this on submit event instead of using the required attribute in the form html would be to do some extended validation.
  // * console.dir(event.currentTarget); // Use console.dir to get the properties inside the form element.
  // OR you could console.log event current target name and value to grab elements inside a form.
  // * console.log(event.currentTarget.name.value);
  // * console.log(event.currentTarget.email.value);
  // * console.log(event.currentTarget.agree.checked);
  // You can also accomplish this using query selector and selecting [name="email"], but if proper semantic HTMl form with name attribute defined for each element then you should not have to.
  const name = event.currentTarget.name.value;
  // Includes is not case sensitive so you will have to use regex, which we will learn later, in order to fix this issue.
  if (name.includes('Karen')) {
    alert('Sorry, we do not allow any Karens into the site.');
    event.preventDefault();
  }
});

// NOTE: Other common elements include:
// 'keyup' -- is for typing
// 'keydown' -- is for deleting
// 'focus' -- is for clicking or focusing on an input or tabbing
// 'blur' -- is for clicking or focusing outside of an input or tabbing

function logEvent(event) {
  console.log(event.type); // Shows the type of event (keyup) every time a key is pressed.
  console.log(event.currentTarget.value); // Shows the typed value.
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// TITLE: Accessibility & Keyboard Codes
// NOTE: One common one occurs with the difference between buttons and links. BUTTONS are used for actions that happen within an application. LINKS are used to change the page.
// NOTE: Items which are not keyboard accessible should not have clicks registered on them. For example if you have a link within an image and add an event listener to the click then someone not using a mouse will not be able to access that event. You can fix this by adding the role="button" for anything which is not a button tag. Also you need to add a tabindex="0" so that people can tab to it. As a better alternative, you could put the image inside a button tag.

// For example:
const photo = document.querySelector('.photo');

// By adding role of button and tabindex you can now tab to the photo but you still cannot click it without a mouse. Here is how you fix that:
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the image!');
    console.log(event.key);
  }
}
// You would add event listener for both a click and a keyup to allow tab and click without a mouse.
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
// NOTE: How do you only listen for the enter key and not all keyups? You can access the event object with key method to determine this. Go to http://keycode.info to get meta info on each key you press on your keyboard.
