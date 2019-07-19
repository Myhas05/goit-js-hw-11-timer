class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerSelector = document.querySelector(selector);
    this.refs = {
      days: this.timerSelector.querySelector('span[data-value="days"]'),
      hours: this.timerSelector.querySelector('span[data-value="hours"]'),
      mins: this.timerSelector.querySelector('span[data-value="mins"]'),
      secs: this.timerSelector.querySelector('span[data-value="secs"]')
    };

    this.timerId = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      this.updateClock(time);
    }, 1000);
  }
  updateClock(value) {
    const days = this.pad(Math.floor(value / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((value % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((value % (1000 * 60)) / 1000));

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
  pad(timeString) {
    return String(timeString).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(1566168464894)
});
