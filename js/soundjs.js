var instance;
var positionInterval;
var assetPath = "audio/";
var current = 0;
var seeking = false;
var sounds = [
  {
    src: "Los Titanes - Basto Una Mirada.mp3",
    id: 0,
    name: "Los Titanes - Basto Una Mirada"
  },
  {
    src: "Los Titanes - Por Retenerte.mp3",
    id: 1,
    name: "Los Titanes - Por Retenerte"
  },
  {
    src: "Los Titanes - Sobredosis.mp3",
    id: 2,
    name: "Los Titanes - Sobredosis"
  },
  {
    src:"Romeo Santos - Propuesta Indecente.mp3",
    id:3,
    name:"Romeo Santos - Propuesta Indecente"
  },
  {
    src:"Romeo Santos - Tuyo.mp3",
    id:4,
    name:"Romeo Santos - Tuyo"
  },
  {
    src:"Romeo Santos - You.mp3",
    id:5,
    name:"Romeo Santos - You"
  },
  {
    src:"Marc Anthony - Hasta Que Te Conoci.mp3",
    id:6,
    name:"Marc Anthony - Hasta Que Te Conoci"
  },
  {
    src:"Marc Anthony - Me Voy A Regalar.mp3",
    id:7,
    name:"Marc Anthony - Me Voy A Regalar"
  },
  {
    src:"Marc Anthony - Nadie Como Ella.mp3",
    id:8,
    name:"Marc Anthony - Nadie Como Ella"
  },
  {
    src:"Vicky Corbacho - Que Bonito.mp3",
    id:9,
    name:"Vicky Corbacho - Que Bonito"
  }
];

var init = function() {
  createjs.Sound.alternateExtensions = ["ogg"];
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
