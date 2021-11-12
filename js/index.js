import {MY_API_KEY} from './config.js'

const searchBox = () => document.querySelector('.search-box')
searchBox().addEventListener('keypress', searchQuery)

const messageBanner = () => document.querySelector("#message-banner")

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
