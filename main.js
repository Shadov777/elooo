function updateTime() {
    var currentDate = new Date();
    var timeString = currentDate.toLocaleTimeString();
    var dateString = currentDate.toLocaleDateString();
    document.getElementById('time').innerHTML = "Czas: " + timeString + " " + dateString;
}

setInterval(updateTime, 1000);

updateTime();
