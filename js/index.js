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

//keydown
// let adventure = document.getElementById("adventure");
// adventure.addEventListener("keydown", function( event ) {   
//     event.target.style.color = "orange";
//     setTimeout(function() {
//         event.target.style.color = "";
//       }, 1000);
//     }, false);

let body = document.querySelector("body");

body.addEventListener("keydown", () => {
  body.style.background = "gray";
});

//keyup
body.addEventListener("keyup", () => {
    body.style.background ="dodgerblue";
});

//wheel
let adv = document.getElementById("adv-img");
const fun = document.getElementById("fun");
function zoom(event, item) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    adv.style.transform = `scale(${scale})`;
    fun.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
    adv.onwheel = zoom;
    fun.onwheel = zoom;

  //drag
  let dest = document.getElementById("dest");
    dest.addEventListener("dragstart", function(event) {
    alert("No dragging!");
  });
  
//   //drop

//     const fun = document.getElementById("fun");
//     console.log(fun)

//     fun.addEventListener("drop", function(event) {
//     alert("No dragging!");
//     event.target.style.opacity = 1;
//   });



  //load
const log = document.querySelector('content-destination');
dest.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.dest(true);
  }, 200);
});


//mouseup
let leggo = document.getElementById("leggo");
leggo.addEventListener("mouseup", function( event ) {   
    event.target.style.color = "gold";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

 //scroll
  window.onscroll=function(){
      console.log("Keep on and scroll on");
  };

//focus
// const traveling = document.querySelector('input[type="traveling"]');
// traveling.addEventListener('blur', (event) => {
//     event.target.style.background = '';    
//   });

//   console.log(traveling)

//dblclick
let funbus = document.getElementById('funbus');
console.log(funbus);
funbus.addEventListener('dblclick', (event) => {
 alert("Nothing for you here!")
});

//grow
const fb = document.getElementById('fb');
console.log(fb);
fb.addEventListener('click', (event) => 
fb.classList.toggle('grow'))

//Prevent Page Refresh
const atags = document.querySelectorAll(".nav-link");
console.log(atags);
atags.forEach (function (atag){
    atag.addEventListener("click", event => {
        event.stopPropagation();
        console.log("You clicked an a tag!");
    });
})

const nav = document.querySelector("nav");
nav.addEventListener("click", event => console.log('You clicked a nav!'))

// for (var i=0; i <links.length; i++){
//     links[i].addEventListener("click",function(event){
//     event.preventDefault()
//     });
// }
// funbus.addEventListener('dblclick', function () {
//   funbus.classList.toggle('large');
// });


//dblclick
// const funbus = document.querySelector('funbus');
// funbus.addEventListener('dblclick', function () {
//   funbus.classList.toggle('large');
// });


// //nav
// const nav = document.querySelector ("nav")
// submitForm.addEventListener("refresh", event => {
//     if (first.value.length <1){
//         this.alert("NULL")
//     }
//     event.preventDefault()
// })

//
// window.addEventListener('load', (event) => {
//     log.textContent = log.textContent + 'load\n';
// });

// document.addEventListener('readystatechange', (event) => {
//     log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     log.textContent = log.textContent + `DOMContentLoaded\n`;
// });
  
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
