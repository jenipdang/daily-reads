import {MY_API_KEY} from './config.js'

const searchBox = () => document.querySelector('.search-box')
searchBox().addEventListener('keypress', searchQuery)

const messageBanner = () => document.querySelector("#message-banner")

const handleErrorDisplay = (error) => {
	messageBanner().classList.add("alert")
	messageBanner().textContent = error
	messageBanner().classList.remove("hide")
	setTimeout(() => {
		messageBanner().classList.remove("alert")
		messageBanner().classList.add("hide")
	}, 5000)
}

function searchQuery(event) {
	if(event.keyCode === 13) {
		getResults(searchBox().value)
		// console.log(searchBox().value)
	}
}

const getResults = (sign) => {
	fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`, {
		"method": "POST",
		"headers": {
			"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
			"x-rapidapi-key": MY_API_KEY
		}
	})
	.then(response => response.json())
	.then(horoscope => displayResults(horoscope))
	.then(horoscope => {
		console.log(horoscope)
	})

	.catch(handleErrorDisplay)
}

const displayResults = (horoscope) => {
	document.getElementById('description').innerText = '\"' + horoscope.description + '\"'
	document.getElementById('current-date').innerText = horoscope.current_date
	document.getElementById('color').innerText = 'Color: ' + horoscope.color
	document.getElementById('compatibility').innerText = 'Compatibility: ' + horoscope.compatibility
	document.getElementById('lucky-number').innerText = 'Lucky Number: ' + horoscope.lucky_number
}

document.addEventListener("DOMContentLoaded", searchQuery)

const menu = document.querySelector('#mobile-menu')
const mobileLinks = document.querySelector('.navbar_menu')

const mobileMenu = () => {
	menu.classList.toggle('is-active');
	mobileLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const hideMobileMenu = () => {
    const mobileMenuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 760 && mobileMenuBars) {
        menu.classList.toggle('is-active')
        mobileLinks.classList.remove('active')
    }
}

mobileLinks.addEventListener('click', hideMobileMenu);

async function getQuotes() {
    await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	    "method": "GET",
	    "headers": {
	    	"x-rapidapi-host": "quotes15.p.rapidapi.com",
		    "x-rapidapi-key": MY_API_KEY
	    }
    })
    .then (response => response.json())
    .then(response => {
	    console.log(response);

	    document.getElementById('description').innerHTML = response.content
	    document.getElementById('color').innerHTML = ' - ' + response.originator.name + ' - '
    })
    .catch(handleErrorDisplay)
}

document.addEventListener("DOMContentLoaded", getQuotes)

const cards = document.querySelectorAll('.zodiacs_card_flip')

function flipCard(){
	this.classList.toggle('is-flipped')
}

cards.forEach((card) => {
	card.addEventListener('mouseover', flipCard)
	card.addEventListener('mouseout', flipCard)
})



// cards.forEach(card.addEventListener('mouseover', () => {
// 	card.classList.toggle('is-flipped')
// }))

// cards.forEach(card.addEventListener('mouseout', () => {
// 	card.classList.toggle('is-flipped')
// }))