window.addEventListener('keydown', function (e) {
    const AUDIO = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    //returns the audio element
    const KEY =document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // returns the div element which matches to keydown
    console.log(KEY);
})