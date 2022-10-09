
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
