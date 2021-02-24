 var audio = new Audio("note.mp3");
 audio.load();

 chrome.browserAction.onClicked.addListener(function(tab) {
	if(!audio.paused) audio.pause();
	else {
		audio.currentTime = 0;
		audio.play();
		}
});

////////////////////////////////////////CITATIONS/////////////////////////////////////
//https://chrome.google.com/webstore/detail/the-sound-of-silence/majacpamicenholpchbcdippdhdenbjj
//////////////////////////////////////////////////////////////////////////////////////
