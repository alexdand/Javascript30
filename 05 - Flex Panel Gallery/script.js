const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName === "flex-grow") {
        this.classList.toggle('open-active');
    }
}

panels.forEach(p => p.addEventListener('click', toggleOpen));
panels.forEach(p => p.addEventListener('transitionend', toggleActive));
