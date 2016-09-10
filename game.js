//game.js  

var Game = function(){
	this.answer = ['galaxy', 'nebula', 'comet', 'supernova', 'satellite', 'orbit', 'asteroid', 'meteor'];
	this.chosenWord = this.answer[Math.floor(Math.random() * this.answer.length)]; 
}

module.exports = Game; 