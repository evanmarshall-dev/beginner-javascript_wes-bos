//! NOTE: Intersection Observer (IO) is NOW used to see if something is currently viewable on the page versus the below consoles to determine how far a user has scrolled on the page

//! NOTE: IO takes a callback FXN which fires each time it needs to check if something is currently on the page.

// Select terms-and-conditions div from HTML
const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

// Listen for scroll event for the above terms-and-conditions div
// terms.addEventListener('scroll', function (e) {
//   console.log(e);
//   console.log(e.currentTarget); // Target of the scroll or class
//   console.log(e.currentTarget.scrollTop); // How far it has scrolled
//   console.log(e.currentTarget.scrollHeight); // Height of the scroll
// });

function obCallback(payload) {
  // console.log(payload[0].intersectionRatio);
  // The if statement will fire when threshold is 1 and this will cause the disabled attribute for the button to be removed
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // Stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
  // } else {
  //   button.disabled = true;
  // }
}

const ob = new IntersectionObserver(obCallback, {
  // Second argument creates root element as terms and threshold for IO to be 1 which is 100% on page
  root: terms,
  threshold: 1,
});

// We want it to trigger when last element is 100% on page
ob.observe(terms.lastElementChild);
