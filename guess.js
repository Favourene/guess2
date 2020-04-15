var guesswork;
var userguesses = [];
var attempts = 0;
var maxguesses = 10;

function endofgame(){ //the allows the difficulty button to disappear and allow the new game button to appear
    document.getElementById('newgame').style.display = 'inline';
    document.getElementById('easybtn').style.display = 'none'
    document.getElementById('medbtn').style.display = 'none'; 
    document.getElementById('hardbtn').style.display = 'none';
    document.getElementById('demibtn').style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly', 'readonly'); //everytime the game ends, the input factor is set to readonly, this  way no input will be allowed when the game ends
}

    function easymode(){ //  max guesses allowed for   easy  mode
        maxguesses = 10;
        document.getElementById('easybtn').className = 'activeButton' //allows the active difficulty to light up when choosen
        document.getElementById('medbtn').className = '';
        document.getElementById('hardbtn').className = '';
        document.getElementById('demibtn').className = '';
    }
    function medmode(){//  max guesses allowed for   medium  mode
        maxguesses = 7;
        document.getElementById('medbtn').className = 'activeButton'
        document.getElementById('easybtn').className = '';
        document.getElementById('hardbtn').className = '';
        document.getElementById('demibtn').className = '';
    }
    function hardmode(){//  max guesses allowed for   hard  mode
        maxguesses = 5;
        document.getElementById('hardbtn').className = 'activeButton'
        document.getElementById('medbtn').className = '';
        document.getElementById('easybtn').className = '';
        document.getElementById('demibtn').className = '';
    }
    function Demimode(){//  max guesses allowed for   hard  mode
        maxguesses = 2;
        document.getElementById('demibtn').className = 'activeButton'
        document.getElementById('medbtn').className = '';
        document.getElementById('easybtn').className = '';
        document.getElementById('hardbtn').className = '';
    }

function newGame(){
    window.location.reload();// everytime the newgame button is clicked, the  page reloads, changing the value to be guessed 
}

function init(){
    guesswork = Math.floor(Math.random() * 200 +10);// this is the math work that gives out the random number, the Math.floor allows the generated number to be an whole number
    //console.log(guesswork);
    document.getElementById('newgame').style.display = 'none';
}
function compareGuess(){
    var userinput = " " + document.getElementById('inputBox').value;// gets value from the input tag in  the  html  to the javascript
    //console.log(userinput);

    userguesses.push(userinput); // these stores all the set of inputs a user tries per game
    //console.log(userguesses); 
    document.getElementById('guesses').innerHTML = userguesses; //this displays the guesses underneath the span space in the  html

    attempts++; // this increases the number of attempts adding +1 to every  attempted value
    document.getElementById('attempts').innerHTML = attempts;// displays the number of attempts to the attempt span

    if(userguesses.length < maxguesses){
        if(userinput > guesswork){ // this specifies which message  should be shown when a  user inputs a guess
            document.getElementById('output').innerHTML="Your Guess is too high";
            document.getElementById('inputBox').value = "";// each time a value is inputed and value is too high, the  input value resets to an empty character
        }else if (userinput < guesswork) {
            document.getElementById('output').innerHTML="Your Guess is too low";
            document.getElementById('inputBox').value = "";// each time a value is inputed and value is too low, the  input value resets to an empty character
        }else {
            document.getElementById('output').innerHTML="You WIN 🔥🏆 🥇! You got it in" + " "+ attempts+" "+ 'attempts'; // the user how many tries they got the answer in
            document.getElementById('parent').style.backgroundColor='darkgreen';
            endofgame(); // brings the game to an end
        }
    }else{
        if(userinput > guesswork){ // If  the  user input  is greater  than the guesswork ouput is you lose
            document.getElementById('output').innerHTML="You lose💔😓!" + '<br> the number was ' + guesswork;
            document.getElementById('parent').style.backgroundColor='darkred';
            endofgame();// brings the game to an end
  
        }else if (userinput < guesswork){ // If  the  user input  is greater  than the guesswork ouput is you lose
            document.getElementById('output').innerHTML="You lose💔😓!"+ '<br> the number was ' + guesswork;
            document.getElementById('parent').style.backgroundColor='darkred';
            endofgame();// brings the game to an end
        }else{
            document.getElementById('output').innerHTML="You WIN 🔥🏆 🥇! You got it in" + " "+ attempts+" "+ 'attempts'; // the user how many tries they got the answer in
            document.getElementById('parent').style.backgroundColor='darkgreen';
            endofgame();// brings the game to an end

        }

    }
    
}

