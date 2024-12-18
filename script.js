function displayDateTime() {
    const now = new Date(); // Create a new Date object

    // Get current day name
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[now.getDay()];

    // Get date in the format: DD-MM-YYYY
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = now.getFullYear();

    // Get time in the format: HH:MM:SS AM/PM
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    const date = `${day}-${month}-${year}`;
    
    // Combine day, date, and time
    const dateTimeString = `${dayName}, ${date} | ${time}`;

    // Update the HTML content
    document.getElementById("datetime").innerText = dateTimeString;
}

// Update the time every second
setInterval(displayDateTime, 1000);

// Call the function once to display immediately
displayDateTime();