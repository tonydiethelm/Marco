/*
What do I need this to do? 
put event handlers and functions on my buttons in index.HTML to...
send a fetch request to localhost/marco. That's it. 

Destructive Marco will send looped fetch requests. It's meant to DDOS the Polo API backend. 
*/


// Setup stuff.
console.log("JS is loading")

const marcoButton = document.getElementById('marco');
const destructiveMarcoButton = document.getElementById('destructiveMarco');

marcoButton.addEventListener("click", sayMarco);
destructiveMarcoButton.addEventListener("click", yellMarco);


function sayMarco(){
  console.log('Marco!')
  
  fetch('/marco', {           
    method: 'GET',
})
.then(result => console.log(data))
};


function yellMarco(){
  console.log('MARCO!')
};

