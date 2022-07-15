/* eslint-disable no-console */
// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const heading = document.querySelector('h2');
// console.log(p);
// console.log(divs);
// console.log(heading);

// Below is a 'setter.
// heading.textContent = 'Evan is the best!';
// Below is a 'getter.
// console.log(heading.textContent); // Can also be innerText. TextContent will give you hidden elements and white space, unlike innerText.
// console.log(heading.innerHTML); // Provides markup within the element.
// console.log(heading.outerHTML); // Includes markup that surrounds the element.

// Best way to attach text to an element.
// heading.insertAdjacentText('beforeend', ' Boobies!!');

// Nodes can be any part of the code whereas an element is something wrapped in a tag.

// NOTE: For other methods/properties you can view the mdn docs.

// TITLE: Classes

// Example from HTML
// * const pic = document.querySelector('.nice');
// classList gives list of all classes on that image element.
// In dev tools if you expand prototype list it will show you a list of methods you can use on this class.
// * console.log(pic.classList);
// Now for examples from prototype
// * pic.classList.add('open');
// * pic.classList.remove('open');
// * pic.classList.toggle('round');
// * pic.classList.add('round');

// TITLE: Attributes
// NOTE: You can access attributes such as alt tags similar to above class/id.

// * pic.alt = 'random pic';
// * pic.width = 200; // This is an example of a setter.
// * console.log(pic.alt); // This is a getter.

// With images sometimes you will get an incorrect value because it has not loaded yet. For example:
// * console.log(pic.naturalWidth); // This is only a getter because you cannot set natural width. It says 0 because the image has not loaded yet.
// The way around this is with listening to the 'load' event and create fxn with naturalWidth:
// * window.addEventListener('load', function () {
// *   console.log(pic.naturalWidth);
// * });

// NOTE: Putting the JS at the bottom of HTML will allow it to wait for the HTML to load however HTML has to make additional requests to load images and the JS will not wait for that.

// There is also getAttribute and setAttribute. The difference between them and simply the dot method above is that they work for non-standard attributes (standard attributes are alt, src). It is bad practice to get or set non-standard attributes.

// A good way to set/get non-standard attributes is to use 'data-.' meta data on an element. When setting or getting these custom attributes you use dataset (i.e. pic.dataset), which will spit back all the custom attributes on that element.

// TITLE: Creating HTML
