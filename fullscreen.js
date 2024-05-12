document.addEventListener("DOMContentLoaded", function () {
  var elem = document.documentElement; // Get the root element (usually <html>)

  // Check if fullscreen mode is supported by the browser
  if (elem.requestFullscreen) {
    // Trigger fullscreen mode when the page loads
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
});
