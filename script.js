const overlay = document.getElementById('overlay');
const mainContainer = document.querySelector('.main-container');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');

overlay.addEventListener('click', () => {
  overlay.style.opacity = '0';
  setTimeout(() => overlay.style.display = 'none', 500);
  mainContainer.classList.add('show');
  audio.play();
});

// Play/pause
playBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = 'pause';
  } else {
    audio.pause();
    playBtn.textContent = 'play';
  }
});

// Progress bar
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
});

// Click on progress
progressContainer.addEventListener('click', e => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});


