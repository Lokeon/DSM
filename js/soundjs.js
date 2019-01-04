var instance;
var positionInterval;
var assetPath = "assets/audio/";
var current = 0;
var seeking = false;
var sounds = [
  {
    src: "Game-Spawn.ogg",
    id: 0,
    name: "Game-Spawn"
  },
  {
    src: "R-Damage.ogg",
    id: 1,
    name: "R Damage"
  },
  {
    src: "Thunder1.ogg",
    id: 2,
    name: "Thunder"
  }
];

var init = function() {
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds(sounds, assetPath);
};

var updateName = function() {
  document.getElementById("screen").innerHTML = sounds.find(function(element) {
    return element.id === current;
  }).name;
};

var firstLoad = function(slider) {
  var button = play.querySelector("i");
  updateName();
  button.classList.remove("fa-play");
  button.classList.add("fa-pause");
  instance = createjs.Sound.play(current);
  instance.on("complete", nextSong);
  trackTime(slider);
};

var trackTime = function(slider) {
  slider.max = instance.duration;

  positionInterval = setInterval(function(event) {
    if (!seeking) {
      slider.value = instance.position;
    }
  }, 30);
};

var sliderDown = function(event) {
  seeking = true;
};

var sliderUp = function(event) {
  seeking = false;
  instance.position = document.getElementById("slider").value;
};

var previousSong = function() {
  var slider = document.getElementById("slider");
  if (instance === undefined) {
    firstLoad(slider);
  } else {
    clearInterval(positionInterval);
    instance.stop();
    current = current === 0 ? sounds.length - 1 : --current;
    updateName();
    instance = createjs.Sound.play(current);
    instance.on("complete", nextSong);
    trackTime(slider);
  }
};

var nextSong = function() {
  var slider = document.getElementById("slider");
  if (instance === undefined) {
    firstLoad(slider);
  } else {
    clearInterval(positionInterval);
    instance.stop();
    current = ++current % sounds.length;
    instance = createjs.Sound.play(current);
    updateName();
    instance.on("complete", nextSong);
    trackTime(slider);
  }
};

var playSong = function() {
  var slider = document.getElementById("slider");
  if (instance === undefined) {
    firstLoad(slider);
  } else {
    if (instance.paused) {
      var button = play.querySelector("i");
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
      trackTime(slider);
      instance.paused = false;
    } else {
      var button = play.querySelector("i");
      button.classList.remove("fa-pause");
      button.classList.add("fa-play");
      instance.paused = true;
      clearInterval(positionInterval);
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var play = document.getElementById("play");
  var next = document.getElementById("next");
  var prev = document.getElementById("previous");
  var slider = document.getElementById("slider");

  next.addEventListener("click", nextSong);
  play.addEventListener("click", playSong);
  prev.addEventListener("click", previousSong);

  slider.addEventListener("mousedown", sliderDown);
  slider.addEventListener("mouseup", sliderUp);
});
