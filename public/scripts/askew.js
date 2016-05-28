"use strict";

var allowToggle = true;

const config = {
	_size: 3,
	set degree(s){ this._size = s; cube = new Cube(s); },
	get degree(){ return this._size; },
	scrambleLength: 30
};

var cube = new Cube(config.degree);
var scramble;

const displayScramble = function() {
	document.getElementById("scramble").style.opacity = 1;
	scramble = cube.createScramble(config.scrambleLength);
	const scrambleSpan = document.getElementById("scramble");
	scrambleSpan.innerText = scramble.toString();
};
const zeroPadded = function(number) { number = parseInt(number); return (number < 10) ? "0" + number : number; };
const updateTimeDisplay = function() {
	const timeStamp = (new CustomEvent({})).timeStamp;
	const elapsedTime = Math.round((timeStamp - startTime)/10)/100;
	document.getElementById("seconds").innerText = Math.floor(elapsedTime);
	var partial = Math.round((elapsedTime % 1) * 10);
	document.getElementById("partials").innerText = partial < 10 ? partial : 0;
};

var timerRunning = false;
var startTime, stopTime;
var updateTimer;

const startTimer = function(event) {
	document.getElementById("scramble").style.opacity = 0;
	startTime = event.timeStamp;
	timerRunning = true;
	updateTimer = setInterval(updateTimeDisplay, 20);
};

const stopTimer = function(event) {
	stopTime = event.timeStamp;
	clearInterval(updateTimer);
	allowToggle = false;
	setTimeout(function() {allowToggle = true;}, 1000);
	timerRunning = false;
	const elapsedTime = Math.round((stopTime - startTime)/10)/100;
	document.getElementById("seconds").innerText = Math.floor(elapsedTime);
	document.getElementById("partials").innerText = zeroPadded((elapsedTime % 1) * 100);
	displayScramble();
};

const toggleTimer = function(event) {
	if(!allowToggle) { return; }
	if(timerRunning) {
		stopTimer(event);
	} else {
		startTimer(event);
	}
};

document.addEventListener("mousedown", function(event) {
	if(timerRunning) {
		toggleTimer(event);
	}
});

document.addEventListener("keydown", function(event) {
	if(event.which === 0 || event.which === 32) {
		toggleTimer(event);
	}
});