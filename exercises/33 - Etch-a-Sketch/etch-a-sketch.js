/* eslint-disable no-console */
// TITLE: Etch-a-Sketch

// #1. We need to select the elements on the page - i.e. canvas and shake button.
const canvas = document.querySelector('#etch-a-sketch'); // Select the canvas by query selector for its ID.
// The canvas is the element and the area where we do the drawing is the CONTEXT.
const ctx = canvas.getContext('2d'); // Created a variable to get the context which is 2d.
const shakeButton = document.querySelector('.shake'); // Grab the shake button.

// #2. Setup our canvas for drawing.
// Setup default properties which can be used ont he canvas context.
// const width = canvas.width;
// const height = canvas.height;
// NOTE: The above variables can be DESTRUCTURED to below:
const { width, height } = canvas;
console.log(width, height); // Gives back 1600 and 100 because that is the canvas width and not the display width.

// Create random x and y starting points on the canvas
// * // Give random number between 0 and 99.99. Math.floor gives us the lower number when rounding.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = 'round'; // Makes the drawn line round vs squared.
ctx.lineJoin = 'round';
ctx.lineWidth = 10; // Changes the size of the drawing.

ctx.beginPath(); // Starts the drawing.
ctx.moveTo(x, y);
ctx.lineTo(x, y); // Where line is drawn to (i.e. 200px right and 200 px down)
ctx.stroke(); // The above creates an invisible line and this makes it visible.

// #3. Write a draw function.
function draw() {}

// #4. Write a handler for the keys.
function handleKey(event) {
  // Create if statement to prevent the preventDefault from stopping ALL keydowns.
  if (event.key.includes('Arrow')) {
    event.preventDefault(); // Prevents the arrow keys from scrolling the page.
    console.log(event.key); // Lists the key which was pressed.
    console.log('HANDLING KEY');
  }
}

// #5. We want a clear/shake function.

// #6. Listen for arrows keys.
window.addEventListener('keydown', handleKey); // Listen for keydown event on window and then run handleKey FXN.

// NOTE: When using the canvas

// You grab onto the canvas then you grab onto a CONTEXT (i.e. 2D or 3D), then you have a set of methods used for drawing to the canvas (i.e. colour, drawing, paint, etc.)
