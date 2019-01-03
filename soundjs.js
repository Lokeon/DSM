var current = 1;
var currentSound = null;
var assetPath = "assets/audio/";
var sounds = [
  {
    src: "Game-Spawn.ogg",
    id: 1
  },
  {
    src: "R-Damage.ogg",
    id: 2
  },
  {
    src: "Thunder1.ogg",
    id: 3
  }
];

function init() {
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds(sounds, assetPath);
}

function play() {
  createjs.Sound.stop();

  var play = document.getElementById("play");
  console.log(play.textContent);
  if (play.textContent === "PLAY") {
    play.innerHTML = "PAUSE";
    currentSound = createjs.Sound.play(current);
    console.log(currentSound);
    currentSound.on("complete", next);
  } else if (play.textContent === "PAUSE") {
    currentSound.stop();
    play.innerHTML = "PLAY";
  }
}

function stop() {
  createjs.Sound.stop();
}

function next() {
  this.stop();
  if (current + 1 > sounds.length) {
    current = 1;
  } else {
    ++current;
  }
  currentSound = createjs.Sound.play(current);
  currentSound.on("complete", next);
}

function before() {
  this.stop();
  if (current - 1 < 1) {
    current = sounds.length;
  } else {
    --current;
  }
  currentSound = createjs.Sound.play(current);
  currentSound.on("complete", before);
}