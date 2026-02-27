/*
Disclaimer:
This is purely for educational and personal practice use.
The images were borrowed from https://kellyplanet.com/ which is a site 
dedicated to all thing Star Trek. I do not know if the images are original
*/

// Audio autoplay with fallback for mobile and browsers that block autoplay
const audio = document.getElementById('bgAudio');
let audioPlayed = false;

// Function to play audio
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

// Try to play immediately
playAudio();

// Play on any user interaction
const interactions = ['click', 'touchstart', 'scroll', 'keydown'];
interactions.forEach(event => {
  document.addEventListener(event, playAudio, { once: true });
});

// Navigation functionality
const nextPageBtn = document.getElementById('nextPageBtn');

nextPageBtn.addEventListener('click', () => {
  // You can create additional HTML pages like index2.html, index3.html
  // Or use a query parameter approach
  
  // Option 1: Navigate to another page
  window.location.href = 'team2.html';
  
  // Option 2: Use query parameters (uncomment if you prefer this)
  // const currentPage = new URLSearchParams(window.location.search).get('page') || '1';
  // const nextPage = parseInt(currentPage) + 1;
  // window.location.href = `index.html?page=${nextPage}`;
});

console.log('Star Trek Character Showcase - Scroll to explore!');
