/*
Disclaimer:
This is purely for educational and personal practice use.
The images were borrowed from https://kellyplanet.com/ which is a site 
dedicated to all thing Star Trek. I do not know if the images are original
*/

// Audio autoplay with fallback
const audio = document.getElementById('bgAudio');

// Try to play audio automatically
audio.play().catch(() => {
  // If autoplay is blocked, play on first user interaction
  document.body.addEventListener('click', function() {
    audio.play();
  }, { once: true });
});

console.log('Star Trek Character Showcase - Scroll to explore!');
