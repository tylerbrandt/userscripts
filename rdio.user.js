// ==UserScript==
// @match http://www.rdio.com/*
// @description Put Now Playing info into RDIO title bar
// ==/UserScript==

setInterval(updateTitle,1000);

function updateTitle() {
	var artistElem = document.querySelector(".player .artist"),
		artist = artistElem ? artistElem.textContent : null,
	    songElem = document.querySelector(".player .name"),
	    song = songElem ? songElem.textContent : null;
	   
	if(artist && song) {
		document.getElementsByTagName("title")[0].innerHTML = [artist,song,"Rdio"].join(" - ");
	}
};

updateTitle();
