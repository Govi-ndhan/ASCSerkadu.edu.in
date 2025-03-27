// Toggle menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

//#########################################################################################################################################
// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Disable keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Prevent F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    
    // Prevent Ctrl+Shift+I (Chrome, Firefox, Safari)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
      e.preventDefault();
      return false;
    }
    
    // Prevent Ctrl+Shift+J (Chrome)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
      e.preventDefault();
      return false;
    }
    
    // Prevent Ctrl+U (Chrome)
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
      e.preventDefault();
      return false;
    }
  });

//#########################################################################################################################################
//Disable screenshot
document.addEventListener('keyup', function(e) {
  // Detect print screen attempt
  
  // Detect Ctrl+Shift+S or Cmd+Shift+S  or PrtSc (Windows/Mac screenshot shortcuts)
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S' || e.key === 'PrintScreen') {
    addWatermark();
        return false;
  }
});

//#########################################################################################################################################

// Disable image saving
document.querySelectorAll('img').forEach( (img) => {
  img.style.webkitTouchCallout = 'none';
  img.draggable = false;
});

//#########################################################################################################################################
//
// Display a watermark over sensitive content
function addWatermark() {
  const watermark = document.createElement('div');
  watermark.innerHTML = 'Screenshoted';
  watermark.style.position = 'fixed';
  watermark.style.top = '50%';
  watermark.style.left = '50%';
  watermark.style.transform = 'translate(-50%, -50%) rotate(-90deg)';
  watermark.style.fontSize = '5em';
  watermark.style.color = 'rgb(200, 200, 200)';
  watermark.style.pointerEvents = 'none';
  watermark.style.zIndex = '1000';
  document.body.appendChild(watermark);
}