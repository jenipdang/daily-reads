import {MY_API_KEY} from './config.js'

const searchBox = () => document.querySelector('.search-box')
searchBox().addEventListener('keypress', searchQuery)

const messageBanner = () => document.querySelector("#message-banner")

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