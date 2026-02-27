// Audio autoplay with fallback
const audio = document.getElementById('bgAudio');
let audioPlayed = false;

function playAudio() {
  if (!audioPlayed) {
    audio.play().then(() => {
      audioPlayed = true;
      console.log('Audio playing');
    }).catch((error) => {
      console.log('Autoplay prevented:', error);
    });
  }
}

playAudio();

const interactions = ['click', 'touchstart', 'scroll', 'keydown'];
interactions.forEach(event => {
  document.addEventListener(event, playAudio, { once: true });
});

// Navigation functionality
const nextPageBtn = document.getElementById('nextPageBtn');
const prevPageBtn = document.getElementById('prevPageBtn');

if (nextPageBtn) {
  nextPageBtn.addEventListener('click', () => {
    window.location.href = 'team3.html'; // Create team3.html for more pages
  });
}

if (prevPageBtn) {
  prevPageBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; // Go back to first page
  });
}

console.log('Team Page 2 - Scroll to explore!');
