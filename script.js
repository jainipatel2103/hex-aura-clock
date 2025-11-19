
// Get elements

const clock = document.getElementById('clock');
const color = document.getElementById('color');
const dateElement = document.getElementById('date');
const body = document.body;

// Function to update the clock
 function updateClock() {
    // Get current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 if number is less than 10
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // Display time
    const timeString = hours + ':' + minutes + ':' + seconds;
    clock.textContent = timeString;

    // Convert time to color
    const red = Math.round((hours / 23) * 255);
    const green = Math.round((minutes / 59) * 255);
    const blue = Math.round((seconds / 59) * 255);

    // Convert RGB to HEX
    const hexColor = '#' + 
    red.toString(16).padStart(2, '0').toUpperCase() +
    green.toString(16).padStart(2, '0').toUpperCase() +
    blue.toString(16).padStart(2, '0').toUpperCase();

    // Display hex color
    color.textContent = hexColor;

     // Get date and month
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateNum = now.getDate();
    const year = now.getFullYear();

    const dateString = dayName + ', ' + monthName + ' ' + dateNum + ', ' + year;
    dateElement.textContent = dateString;
 }

  // Update clock every second
        updateClock();
        setInterval(updateClock, 1000);
        
        
       
    

        

         

     

           

        

            
        
       
