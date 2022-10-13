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
  marco();
  
};


function yellMarco(){
  console.log('MARCO!')
  for(let counter = 0; counter < 500; counter++){
    marco();
  }
};


function marco(){
  fetch('/marco', {           
    method: 'GET',
})
.then(result => result.json())
.then(result => console.log(result))
}