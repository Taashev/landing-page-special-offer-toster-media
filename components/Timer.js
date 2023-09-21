import { getUTCDateFormat } from "../utils/getUTCDateFormat.js";

export class Timer {
  constructor(seconds, callback) {
    this.seconds = seconds;
    this.callback = callback;
  }

  start() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        this.stop();
      }

      if (this.seconds > 0) {
        this.seconds -= 1;
      }

      this.time = getUTCDateFormat(this.seconds);
      
      this.callback && this.callback(this.time);

      localStorage.setItem('timeOffer', this.seconds);
    }, 1000);
  };

  stop() {
    clearInterval(this.timer);
  };
}
