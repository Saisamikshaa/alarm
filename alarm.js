const playAudio = () => {
  let audio = new Audio("nightChanges.mp3");
  audio.play();
};
const setAlarm = (hour, minute, second) => {
  let myInterval = setInterval(() => {
    let present = new Date();
    let presentHour = present.getHours();
    let presentMinute = present.getMinutes();
    let presentSecond = present.getSeconds();
    if (
      presentHour === hour &&
      presentMinute === minute &&
      presentSecond === second
    ) {
      playAudio();
      clearInterval(myInterval);
    }
  }, 1000);
};
setAlarm(10,20,0);