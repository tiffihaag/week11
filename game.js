var Word = require('./Word.js');

var wordBank = ['galaxy', 'nebula', 'comet', 'supernova', 'satellite', 'orbit', 'asteroid', 'meteor'];

function Game() {
	this.wins = 0;
	this.losses = 0;
	this.livesRemaining = 0;
	this.lettersUsed = [];
	this.word;

	this.startNewGame = function() {
		this.livesRemaining = 10;
		this.lettersUsed = [];
		this.word = this.generateRandomWord();

		console.log("WELCOME TO GALACTIC HANGMAN.");

	}

	this.generateRandomWord = function(){
		var len = wordBank.length;
		var randomWord = wordBank[Math.floor(Math.random() * len)];
		var currentWord = new Word(randomWord);

		return currentWord;
	}

	this.printResults = function(){
		//for game to print results
	}

	this.endGame = function(){
		//prints end of game results
	}
}

module.exports = Game;
