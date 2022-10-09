//Box ONE Hovers//
const boxOne = document.querySelector('.boxOneBackground')
const boxTwo = document.querySelector('.boxTwoBackground')

document.querySelector('#menuLink').addEventListener('mouseover', boxOneBW)
document.querySelector('#menuLink').addEventListener('mouseout', boxOneColor)

function boxOneBW () {
    if (true) {
        boxOne.style.filter = "grayscale(0)"
        boxOne.style.transition = "0.6s ease-in-out"
    } 
}

function boxOneColor () {
    if (true) {
        boxOne.style.filter = "grayscale(60%)"
        boxOne.style.transition = "0.6s ease-in-out"
    } 
}

//Box TWO Hovers//
document.querySelector('#logo').addEventListener('mouseover', boxTwoBW)
document.querySelector('#logo').addEventListener('mouseout', boxTwoColor)
document.querySelector('#gastro').addEventListener('mouseover', boxTwoBW)
document.querySelector('#gastro').addEventListener('mouseout', boxTwoColor)


function boxTwoBW () {
    if (true) {
    boxTwo.style.filter = "grayscale(0)"
    boxTwo.style.transition = "0.6s ease-in-out"
    }
}

function boxTwoColor () {
    if (true) {
    boxTwo.style.filter = "grayscale(60%)"
    boxTwo.style.transition = "0.6s ease-in-out"
    }
}

// //IMAGE AUTOSLIDER
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 1;

// const repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   const repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 5000);
//   }
//   repeater();
// }
// repeat();


//MENU SELECTOR//

const drinks = document.querySelector('#drinksMenu')
const menu = document.querySelector('#foodMenu')

document.querySelector('#menuNavFood').addEventListener('click', navFood)
document.querySelector('#menuNavDrinks').addEventListener('click', navDrinks)

function navFood(){
	drinks.classList.add('hidden')
	menu.classList.toggle('hidden')
}

function navDrinks(){
	menu.classList.add('hidden')
	drinks.classList.toggle('hidden')
}



