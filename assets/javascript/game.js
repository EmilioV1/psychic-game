var options = ["r", "p", "s"]

// Listens for a key to be pressed.
document.onkeyup = function(){
    var userGuess = string.fromCharCode(event.keycode)
        toLowerCase();

  alert(userGuess);

    var computerGuess = options[Math.floor(Math.random()*options.length)];

    console.log(computerGuess);


}