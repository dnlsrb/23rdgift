// Function to calculate remaining time and update button text
function updateRemainingTime() {
  var currentDate = new Date();
  var targetDate = new Date("June 26, 2024");
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  // If the current date is after the target date, remove the disabled attribute
  if (timeDifference <= 0) {
    document.getElementById("fullscreenButton").removeAttribute("disabled");
    document.getElementById("fullscreenButton").innerHTML =
      '<div class="glow " style="color:white; font-size:30px;" >' +
      "<strong> Happy 23rd birthday! </strong>" +
      "</div>" +
      '<div style="color:white;   " >' +
      "(Click me)" +
      "</div>";
  } else {
     document.getElementById("fullscreenButton").setAttribute("disabled", true);

    // Calculate remaining days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var total = days + 1;
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update button text with remaining time
    document.getElementById("fullscreenButton").innerHTML =
      '<div   class="glow "style="color:white;" >' +
      '<div style="display:flex; align-items:center; justify-content:center;" >' +
      // '<span class="material-icons  md-36">' +
      // "timer" +
      // "</span>" +
      '<span style=" font-size:100px;">' +
      "<strong>" +
      total +
      "</strong>" +
      "</span>" +
      "</div>" +
      '<div  style="font-size:20px;">' +
      "<strong>" +
      "days left" +
      "</strong>" +
      "</div>" +
      "</div>";
  }
}

// Call the function to update remaining time immediately
updateRemainingTime();

// Update remaining time every second
setInterval(updateRemainingTime, 1000);
