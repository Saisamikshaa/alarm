// Function to play the alarm sound
const playAudio = () => {
  let audio = new Audio("nightChanges.mp3");
  audio.play();
  
  // Show alarm ringing message
  const alarmStatus = document.getElementById('alarmStatus');
  alarmStatus.textContent = 'Alarm is ringing!';
  alarmStatus.style.color = 'red';
};

// Function to set the alarm
const setAlarm = (hour, minute, second) => {
  // Update the status message to indicate the alarm is set
  const alarmStatus = document.getElementById('alarmStatus');
  alarmStatus.textContent = `Alarm set for ${hour}:${minute}:${second}`;
  alarmStatus.style.color = 'green';

  // Set an interval to check the current time every second
  let myInterval = setInterval(() => {
      let present = new Date();
      let presentHour = present.getHours();
      let presentMinute = present.getMinutes();
      let presentSecond = present.getSeconds();

      // Check if the current time matches the alarm time
      if (
          presentHour === hour &&
          presentMinute === minute &&
          presentSecond === second
      ) {
          playAudio();       // Play the alarm sound
          clearInterval(myInterval);  // Stop checking the time
      }
  }, 1000);  // Interval is set to 1000 milliseconds (1 second)
};

// Function to get input from the user and set the alarm
function setAlarmFromUI() {
  // Retrieve values from input fields
  const hour = parseInt(document.getElementById('hour').value, 10);
  const minute = parseInt(document.getElementById('minute').value, 10);
  const second = parseInt(document.getElementById('second').value, 10);

  // Validate input values and set the alarm
  if (!isNaN(hour) && !isNaN(minute) && !isNaN(second)) {
      setAlarm(hour, minute, second);
  } else {
      alert("Please enter valid numbers for hour, minute, and second.");
  }
}
