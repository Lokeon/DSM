window.onload = function() {

	var video = document.getElementById("video");
	var playButton = document.getElementById("play");
	var muteButton = document.getElementById("sound");
	var fullScreenButton = document.getElementById("full-screen");
	var videoBarra = document.getElementById("video-barra");
	var volumenBarra = document.getElementById("volumen-barra");

    // Pausar/PLay 
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			video.play();
		} else {
			video.pause();
		}
	});
    
    // Boton mute
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
		} else {
			video.muted = false;
		}
	});


	// Boton pantalla completa
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Cambiar el slider
	videoBarra.addEventListener("change", function() {
		var time = video.duration * (videoBarra.value / 100);
		video.currentTime = time;
	});

	
	// Actualizar slider
	video.addEventListener("timeupdate", function() {
		var value = (100 / video.duration) * video.currentTime;
		videoBarra.value = value;
	});

	// Pausar el video cuando mueves el slider
	videoBarra.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play video cuando mueves el slider
	videoBarra.addEventListener("mouseup", function() {
		video.play();
	});

	// Slider sonido
	volumenBarra.addEventListener("change", function() {
		video.volume = volumenBarra.value;
	});
}