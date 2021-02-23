function playSound(e) {
    //returns the audio element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // returns the div element which matches to keydown
    const KEY = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     //this rewinds the tone each time
    audio.currentTime = 0;
    audio.play();
    // when a non-existent key is hit, it will return 
    if (!audio) return;
    KEY.classList.add('playing')
}
function removeTransition(e) {
    //skip it if its not a transform property
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing')
}
// click functionality 
const items = document.querySelectorAll('.key');
function clickTrigger() {
    let key = (this.dataset.key);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    this.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

function unclickTrigger() {
    this.classList.remove('playing');
}
items.forEach(item => item.addEventListener('mousedown', clickTrigger));
items.forEach(item => item.addEventListener('mouseup', unclickTrigger));


window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
