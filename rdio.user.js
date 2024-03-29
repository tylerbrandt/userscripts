// ==UserScript==
// @match http://www.rdio.com/*
// @description Put Now Playing info into RDIO title bar
// ==/UserScript==

setInterval(updateTitle,1000);

function updateTitle() {
	// Player source looks like:
	// div.player
	// |_div.image_container
	// |_div.header
	//   |_a.name (Song Title)
	//   |_a.artist (Artist Name)
	var artistElem = document.querySelector(".player .artist"),
	    artist = artistElem ? artistElem.textContent : null,
	    songElem = document.querySelector(".player .name"),
	    song = songElem ? songElem.textContent : null;
	   
	// Set the title to {artist} - {song} - Rdio
	if(artist && song) {
		document.getElementsByTagName("title")[0].innerHTML = [artist,song,"Rdio"].join(" - ");
	}
};

updateTitle();
