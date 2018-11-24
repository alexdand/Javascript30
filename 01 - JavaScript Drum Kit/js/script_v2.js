function playSound(e) {
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
