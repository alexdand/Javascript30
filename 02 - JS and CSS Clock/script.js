const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds*6) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes*6) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}, 1000);