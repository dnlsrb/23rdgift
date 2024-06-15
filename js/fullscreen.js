document.addEventListener("DOMContentLoaded", () => {
  const fullscreenButton = document.getElementById("fullscreen");
  const icon = fullscreenButton.querySelector(".material-icons");

  // Function to enter fullscreen
  function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }

  // Function to exit fullscreen
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  }

  // Function to toggle fullscreen
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  }

  // Event listener for fullscreen changes
  document.addEventListener("fullscreenchange", updateIcon);
  document.addEventListener("mozfullscreenchange", updateIcon);
  document.addEventListener("webkitfullscreenchange", updateIcon);
  document.addEventListener("msfullscreenchange", updateIcon);

  // Function to update the icon
  function updateIcon() {
    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      fullscreenButton.textContent = "fullscreen_exit";
    } else {
      fullscreenButton.textContent = "fullscreen";
    }
  }

  // Event listener for the button click
  fullscreenButton.addEventListener("click", toggleFullscreen);
});
