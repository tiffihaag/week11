//For the other js file I'm referencing
var fs = require("fs");
var inquire = require('inquirer');
var letter = require("./letter.js");
var game = require("./game.js");
var word = require("./word.js");

function initHangman(){
	game.startNewGame();
	promptAndProcessInput();
}

function promptAndProcessInput(){
	inquirer.prompt([{
		type: 'input',
		name: 'userGuess',
		message: 'Enter guess (letter a-z):',
		validate: function(value){
			var validInputs = /[a-z]|[0-9]/i;

			if (value.length == 1 && validInputs.test(value))
				return true;

			return 'Please enter a valid guess:';
		}
	}]).then(function(answer){
		var userGuess = answer.userGuess.toUpperCase();

		if(game.lettersUsed.indexOf(userGuess) == -1){
			game.lettersUsed.push(userGuess);

			var correct = game.word.checkLetterInput(userGuess);

			if(correct){
				game.printresults("Your guess is correct.");
			}
			else {
				game.livesRemaining--;
				game.printresults("Wrong.");
			}
		}
		else{
			game.printresults("Letter has already been used.");
		}

		var userWon = game.word.getDisplayWord() === game.word.getTargetWord();

		if(userWon){
			game.wins++;
			endCurrentGame("You won!");
		}
		else if(game.livesRemaining > 0)
			promptAndProcessInput();
		else {
			game.losses++;
			endCurrentGame("End of game. You lose.");
		}
	});
}

//Application go!
initHangman();


// game.startnewgame to play again