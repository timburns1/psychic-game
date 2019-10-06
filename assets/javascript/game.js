// letters the user types
let computerChoices= ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// setting for 0
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let letterUser= [];
let eachofLetters = null;
console.log(computerChoices)

// Sets the computerGuess variable eqaul to computerChoice array
const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(Math)

function countGuessesLeft(){ 
    document.querySelector("guessesLeft").innerHTML = "Guesses Left" + guessesLeft;

}

function farUserGuesses(){
    document.querySelector("#letters").innerHTML = "Your Guesses So Far" + letterUser.join('');
    
}

let restart = function(){
    guessesLeft = 9;
    letterUser = [];
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log([])
}

document.onkeyup = function(event){
    guessesLeft--;

    let userGuess= String.fromCharCode(event.keyCode).toLowerCase();
    console.log(onkeyup)

    letterUser.push(userGuess);
    

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