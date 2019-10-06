const computerChoices= ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


let wins = 0;
let losses = 0;
let guessesLeft = 9;
let letterUser= [];
let eachofLetters= null;
console.log(computerChoices)


let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(Math)

function countGuessesLeft(){ 
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    console.log(document)
}

function farUserGuesses(){
    document.querySelector("#letters").innerHTML = "Your Guesses So Far: " + letterUser.join('');
    
}



let restart = function(){
    guessesLeft = 9;
    letterUser = [];
    let computerGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event){
    guessesLeft--;

    let userGuess= String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();
    console.log(onkeyup)

    

    if (userGuess === computerGuess){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        restart();
    }

    else if (guessesLeft === 0){
        losses++;
        document.querySelector('#lose').innerHTML = "Losses: " + losses;
        restart();
    }
    console.log(userGuess)
    
};