window.onload = function() {

	var video = document.getElementById("video");
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");

    // Pausar/PLay 
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			video.play();
            playButton.innerHTML = "Pausar";
		} else {
			video.pause();
            playButton.innerHTML = "Reproducir";
		}
	});
    
    // Boton mute
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
            muteButton.innerHTML = "Activar sonido";
		} else {
			video.muted = false;
            muteButton.innerHTML = "Silenciar";
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
	seekBar.addEventListener("change", function() {
		var time = video.duration * (seekBar.value / 100);
		video.currentTime = time;
	});

	
	// Actualizar slider
	video.addEventListener("timeupdate", function() {
		var value = (100 / video.duration) * video.currentTime;
		seekBar.value = value;
	});

	// Pausar el video cuando mueves el slider
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play video cuando mueves el slider
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Slider sonido
	volumeBar.addEventListener("change", function() {
		video.volume = volumeBar.value;
	});
}