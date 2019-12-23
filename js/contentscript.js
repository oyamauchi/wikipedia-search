// Remind users of Wikipedia Search on Wikipedia home page
if (window.location.href.includes("www.wikipedia.org") && document.body.querySelector(".search-container")) {
	var searchContainer = document.body.querySelector(".search-container")
	// Create message
	var message = document.createElement('div')
	message.innerText = "You can search Wikipedia from your browser's search bar. Just type 'wiki' in the search bar, then a space, then the name of the article you want."
	searchContainer.appendChild(message)
}