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

