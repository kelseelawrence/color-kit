

// Get Stuff
// const elBody = document.querySelector('body');

// Set variable for HTML `body` element
const elBody = document.querySelector("body");

// ✅ Check-Check: log out the `body` element in the console
console.log(elBody);

// ✅ Check-Check: get and attach the node for the background color
console.log(elBody.style.backgroundColor);

// ✅ Hard code a background color (string)
elBody.style.backgroundColor = "lightblue"; // Example color

// ✅ Dynamically set background color using ColorKit library
elBody.style.backgroundColor = colorkit.random();

// ✅ Add a sparkle effect for fun
colorkit.sparkle(elBody);
