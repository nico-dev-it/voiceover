// Functions
function wavesAnimation (waves) {
    for (const wave of waves) {
        wave.classList.remove('stop-animation')
    }
}

function endAudio () {
    pauseButton1.classList.add('d-none')
    playButton1.classList.remove('d-none')
    pauseButton2.classList.add('d-none')
    playButton2.classList.remove('d-none')
    pauseButton3.classList.add('d-none')
    playButton3.classList.remove('d-none')
    pauseButton4.classList.add('d-none')
    playButton4.classList.remove('d-none')
    stopAnimation()
}

function stopAnimation() {
    for (const wave of waves1) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves2) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves3) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves4) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves5) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves6) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves7) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves8) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves9) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves10) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves11) {
        wave.classList.add('stop-animation')
    }
    for (const wave of waves12) {
        wave.classList.add('stop-animation')
    }
}

window.onload = stopAnimation;


// Player 1 - BA
const audioBA = document.getElementById("BA")
const playButton1 = document.querySelector(".player1-play-button")
const pauseButton1 = document.querySelector(".player1-pause-button")
const waves1 = document.querySelectorAll(".player1-bar-scale1")
const waves2 = document.querySelectorAll(".player1-bar-scale2")
const waves3 = document.querySelectorAll(".player1-bar-scale3")


function toggleAudio () {
    if (audioBA.paused) {
        audioBA.play();
        pauseButton1.classList.remove('d-none')
        playButton1.classList.add('d-none')
        wavesAnimation(waves1)
        wavesAnimation(waves2)
        wavesAnimation(waves3)
    } else {
        audioBA.pause();
        pauseButton1.classList.add('d-none')
        playButton1.classList.remove('d-none')
        stopAnimation()
    }
}

pauseButton1.addEventListener('click',toggleAudio)
playButton1.addEventListener('click', toggleAudio)
audioBA.onended = endAudio;

const timeline = document.querySelector('.timeline')

function changeTimelinePosition () {
    const percentagePosition = (100*audioBA.currentTime) / audioBA.duration
    timeline.style.backgroundSize = `${percentagePosition}% 100%`
    timeline.value = percentagePosition;
}

audioBA.ontimeupdate = changeTimelinePosition;

function changeSeek () {
    audioBA.currentTime = (timeline.value * audioBA.duration) / 100
}

timeline.addEventListener('change', changeSeek)

// Player 2 - Samaritans
const audioSamaritans = document.getElementById('Samaritans')
const playButton2 = document.querySelector('.player2-play-button')
const pauseButton2 = document.querySelector('.player2-pause-button')
const waves4 = document.querySelectorAll('.player2-bar-scale1')
const waves5 = document.querySelectorAll('.player2-bar-scale2')
const waves6 = document.querySelectorAll('.player2-bar-scale3')

function toggleAudio2 () {
    if (audioSamaritans.paused) {
        audioSamaritans.play();
        pauseButton2.classList.remove('d-none')
        playButton2.classList.add('d-none')
        wavesAnimation(waves4)
        wavesAnimation(waves5)
        wavesAnimation(waves6)
    } else {
        audioSamaritans.pause();
        pauseButton2.classList.add('d-none')
        playButton2.classList.remove('d-none')
        stopAnimation()
    }
}

pauseButton2.addEventListener('click',toggleAudio2)
playButton2.addEventListener('click', toggleAudio2)
audioSamaritans.onended = endAudio;

const timeline2 = document.querySelector('.timeline2')

function changeTimelinePosition2 () {
    const percentagePosition2 = (100*audioSamaritans.currentTime) / audioSamaritans.duration
    timeline2.style.backgroundSize = `${percentagePosition2}% 100%`
    timeline2.value = percentagePosition2;
}

audioSamaritans.ontimeupdate = changeTimelinePosition2;

function changeSeek2 () {
    audioSamaritans.currentTime = (timeline2.value * audioSamaritans.duration) / 100
}
timeline2.addEventListener('change', changeSeek2)

// Player 3 - Narration
const audioNarration = document.getElementById('Narration')
const playButton3 = document.querySelector('.player3-play-button')
const pauseButton3 = document.querySelector('.player3-pause-button')
const waves7 = document.querySelectorAll('.player3-bar-scale1')
const waves8 = document.querySelectorAll('.player3-bar-scale2')
const waves9 = document.querySelectorAll('.player3-bar-scale3')

function toggleAudio3 () {
    if (audioNarration.paused) {
        audioNarration.play();
        pauseButton3.classList.remove('d-none')
        playButton3.classList.add('d-none')
        wavesAnimation(waves7)
        wavesAnimation(waves8)
        wavesAnimation(waves9)
    } else {
        audioNarration.pause();
        pauseButton3.classList.add('d-none')
        playButton3.classList.remove('d-none')
        stopAnimation()
    }
}

pauseButton3.addEventListener('click',toggleAudio3)
playButton3.addEventListener('click', toggleAudio3)
audioNarration.onended = endAudio;

const timeline3 = document.querySelector('.timeline3')

function changeTimelinePosition3 () {
    const percentagePosition3 = (100*audioNarration.currentTime) / audioNarration.duration
    timeline3.style.backgroundSize = `${percentagePosition3}% 100%`
    timeline3.value = percentagePosition3;
}

audioNarration.ontimeupdate = changeTimelinePosition3;

function changeSeek3 () {
    audioNarration.currentTime = (timeline3.value * audioNarration.duration) / 100
}
timeline3.addEventListener('change', changeSeek3)

// Player 4 - AudioBook
const audioBook = document.getElementById('AudioBook')
const playButton4 = document.querySelector('.player4-play-button')
const pauseButton4 = document.querySelector('.player4-pause-button')
const waves10 = document.querySelectorAll('.player4-bar-scale1')
const waves11 = document.querySelectorAll('.player4-bar-scale2')
const waves12 = document.querySelectorAll('.player4-bar-scale3')

function toggleAudio4 () {
    if (audioBook.paused) {
        audioBook.play();
        pauseButton4.classList.remove('d-none')
        playButton4.classList.add('d-none')
        wavesAnimation(waves10)
        wavesAnimation(waves11)
        wavesAnimation(waves12)
    } else {
        audioBook.pause();
        pauseButton4.classList.add('d-none')
        playButton4.classList.remove('d-none')
        stopAnimation()
    }
}

pauseButton4.addEventListener('click',toggleAudio4)
playButton4.addEventListener('click', toggleAudio4)
audioBook.onended = endAudio;

const timeline4 = document.querySelector('.timeline4')

function changeTimelinePosition4 () {
    const percentagePosition4 = (100*audioBook.currentTime) / audioBook.duration
    timeline4.style.backgroundSize = `${percentagePosition4}% 100%`
    timeline4.value = percentagePosition4;
}

audioBook.ontimeupdate = changeTimelinePosition4;

function changeSeek4 () {
    audioBook.currentTime = (timeline4.value * audioBook.duration) / 100
}
timeline4.addEventListener('change', changeSeek4)

const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    loaderContainer.style.display = 'none';
});

const test = document.getElementById('test')

test.addEventListener("click", toggle)

function toggle () {
    swal({
        icon: "success",
    });
setTimeout(redirect, 3000)
}

function redirect () {
    window.open('https://www.instagram.com/toby_underwood/', "_blank");}

