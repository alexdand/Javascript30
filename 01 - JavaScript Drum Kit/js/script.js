let buttonsArray = [].slice.call(document.querySelectorAll(".key"));

let buttonsMap = buttonsArray.reduce((map, btn) => {
    map.set(btn.querySelector('kbd').innerHTML, btn);
    return map;
}, new Map());

window.addEventListener('keypress', function(e) {
    if (buttonsMap.get(e.key.toUpperCase())) {
        let btn = buttonsMap.get(e.key.toUpperCase());
        let audio = new Audio('sounds/' + btn.querySelector('.sound').innerHTML + '.wav');
        btn.className += " playing";
        setTimeout(() => {
            btn.className = "key";
        }, 200);
        audio.play();
    }
});
