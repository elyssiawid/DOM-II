// Your code goes here

// document.getElementById(".btn").addEventListener("click", displayDate);

//mouseover
let btn = document.getElementById("btn1");
btn.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "purple";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

//mousedown
let adventure = document.getElementById("adventure");
adventure.addEventListener("mousedown", function( event ) {   
    event.target.style.color = "red";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

//wheel
let adv = document.getElementById("adv-img");
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    adv.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('adv-img');
  adv.onwheel = zoom;

  //drap
  let dest = document.getElementById("dest");
    dest.addEventListener("dragstart", function(event) {
    alert("No dragging!");
  });
  
  //drop
    const fun = document.getElementById("fun");
    console.log(fun)
    
    fun.addEventListener("drop", function(event) {
    event.preventDefault();
    alert("No dragging!");
    event.target.style.opacity = 0.5;
  });



  //load
const log = document.querySelector('content-destination');
const reload = document.querySelector('#dest');

dest.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.dest(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});
  
//     leggo.addEventListener("drop", myScript);
//     console.log(leggo);

// let adventure = document.getElementById("adventure");
// adventure.addEventListener("keydown", function( event ) {   
//     event.target.style.color = "orange";
//     setTimeout(function() {
//         event.target.style.color = "";
//       }, 1000);
//     }, false);

// let adventure = document.getElementById("adventure");
// adventure.addEventListener('keydown', logKey);

// function logKey(adventure) {
//   log.textContent += ` ${adventure.code}`;
// }

    


// let btn = document.getElementByClassName("btn");
// btn.addEventListener("mouseover", function( event ) {   
//     event.target.style.color = "purple";
//     setTimeout(function() {
//         event.target.style.color = "";
//       }, 500);
//     }, false);

    // btn.addEventListener("mouseover", function( event ) {  
    //     event.target.style.color = "orange";
    // setTimeout(function() {
    //         event.target.style.color = "";
    //     }, 500);
    // }, false);


    // pgs.forEach((paragraph) => {
    //     addEventListener("copy", event => {
    //         alert("Do not copy our content!");
    //     });
    // });