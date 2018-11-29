let video = document.querySelector('video');
let buttonPlay = document.querySelector('.player__button');
let videoVolume = document.querySelector('input[name="volume"]');
let videoPlaybackRate = document.querySelector('input[name="playbackRate"]');
let dataSkips = document.querySelectorAll('button[data-skip]');
let progressBar = document.querySelector('.progress');
let videoProgress = document.querySelector('.progress__filled');
let isPlaying = false;

buttonPlay.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

progressBar.addEventListener('click', scrub);

videoVolume.addEventListener('input', setVolume);
videoVolume.addEventListener('change', setVolume);

videoPlaybackRate.addEventListener('input', setRate);
videoPlaybackRate.addEventListener('change', setRate);

dataSkips.forEach(ds => ds.addEventListener('click', skipTime));

let mouseDown = false;
progressBar.addEventListener('mousedown', () => mouseDown = true);
progressBar.addEventListener('mouseup', () => mouseDown = false);
progressBar.addEventListener('mousemove', (e) => mouseDown && scrub(e));

function skipTime() {
    video.currentTime += Number(this.dataset.skip);
}

function setVolume() {
    video.volume = this.value;
}

function setRate() {
    video.playbackRate = this.value;
}

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    buttonPlay.textContent = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    videoProgress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
