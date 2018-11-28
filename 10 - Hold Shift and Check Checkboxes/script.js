let isShiftActive = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 'Shift' && !isShiftActive) {
        isShiftActive = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Shift') {
        isShiftActive = false;
    }
});

let firstIdx;
const boxes = Array.from(document.querySelectorAll('input[type=checkbox]'));

boxes.forEach((box, idx) => box.addEventListener('click', (e) => {
    if (!isShiftActive) {
        firstIdx = idx;
    } else {
        boxes.slice(firstIdx, idx).forEach(b => b.checked = true);
    }
}));
