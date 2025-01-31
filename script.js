// Set the date for the countdown (February 5, 2025)
const countdownDate = new Date("Feb 5, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown ends
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Happy Birthday Hani!";
    }
}, 1000);
