import './scss/main.scss';

const refs ={
timerFace : document.querySelector("#timer-1"),
startBnt : document.querySelector("button[data-action-start]"),
stoptBnt : document.querySelector("button[data-action-stop]")
};

class CountdownTimer {
  constructor({ selector, targetDate }){
    this.intervalId = null;
    this.isActive = false;
    this.targetDate = targetDate;
    this.selector = document.querySelector(selector);
    this.start();
   
  }
  start(){
    if(this.isActive){
      return;
    }
    const futureDate = this.targetDate;
    this.isActive = true;
    this.intervalId = window.setInterval(() =>{
      const currentTime = Date.now();
     
      const deltaTime = futureDate - currentTime;
      const time = this.getTime(deltaTime);
     
     
      this.selector.querySelector('span[data-value="days"]').textContent = time.days;
      this.selector.querySelector('span[data-value="hours"]').textContent = time.hours;
      this.selector.querySelector('span[data-value="mins"]').textContent = time.mins;
      this.selector.querySelector('span[data-value="secs"]').textContent = time.secs;
    },1000)
  };
  stop(){
   clearInterval(this.intervalId);
    this.isActive = false;
    // const time = this.getTime(0);
  };


  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1", targetDate: new Date("Jul 17, 2021")
})


refs.startBnt.addEventListener('click', () =>{
  timer.start();
});

refs.stoptBnt.addEventListener('click', () =>{
  timer.stop();
});

// function updateClock({days, hours, mins, secs}){
//   refs.timerFace.textContent = `${days}:${hours}:${mins}:${secs}`;
// }

