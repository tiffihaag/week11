// main.js 

var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

var newGame = new game();
var gameAnswer = newGame.chosenWord;
var guessesLeft = 7;
var checkWord = new word(newGame.chosenWord);
var newLetter = new letter(checkWord.word);
var isFirstGuess = true;

hangman();

function hangman (){
	
	if (guessesLeft > 0) {

		console.log("Remaining Guesses :" + guessesLeft)

		if (isFirstGuess) {
			newLetter.begin();
			console.log(newLetter.output);
		}
		else {
			console.log(newLetter.display());
		}

		console.log("Letters Guessed: " + newLetter.lettersGuessed);

		inquirer.prompt({
		name: "guess",
		message: "Welcome to Galactic Hangman. Guess a letter (a-z only): "
		}).then(function(answer) {
			isFirstGuess = false;
			newLetter.update(answer.guess);

			if (newLetter.isMatch) {
				if(newLetter.win()) {
					console.log("You got it!");
					console.log("The answer was: " + gameAnswer);
					return;
				}
				hangman();

			}

			else {
				guessesLeft--;
				hangman();
			}
		})
	}	

	else {
		console.log("No guesses remaining, you lost!");
		console.log("The answer was: " + gameAnswer);
	}
}