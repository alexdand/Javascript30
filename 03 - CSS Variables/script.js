const spacing = document.querySelector('#spacing');
const blurness = document.querySelector('#blur');
const color = document.querySelector('#base');

let root = document.documentElement;

spacing.addEventListener('input', function(e) {
    root.style.setProperty('--spacing', `${e.srcElement.value}px`);
});

blurness.addEventListener('input', function(e) {
    console.log(e.srcElement.value);
    root.style.setProperty('--blur', `${e.srcElement.value}px`);
});

color.addEventListener('change', function(e) {
    root.style.setProperty('--base', `${e.srcElement.value}`);
});