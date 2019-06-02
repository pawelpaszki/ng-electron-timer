import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'timer';
  public isReset: boolean = true;
  public isPaused: boolean = true;
  public seconds: number = 0;
  public minutes: number = 0;
  public nms: number = 0; // not milliseconds -> 10 milliseconds
  public hours: number = 0;

  start() {
    this.isReset = false;
    this.isPaused = false;
    this.increaseTime();
  }

  pause() {
    this.isPaused = true;
  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.nms = 0;
    this.isReset = true;
    this.isPaused = false;
  }

  increaseTime() {
    if (!this.isPaused && !this.isReset) {
      setTimeout(() => {
        this.nms = this.nms + 5;
        if (this.nms === 100) {
          this.nms = 0;
          this.seconds = this.seconds + 1;
        }
        if (this.seconds === 60) {
          this.seconds = 0
          this.minutes = this.minutes + 1;
        }
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours = this.hours + 1;
        }
        if (this.hours === 24) {
          this.hours = 0;
        }
        this.increaseTime();
      }, 49);
    }
  }

  unitToDisplayString(unit: number): string {
    if (unit < 10) {
      return `0${unit}`;
    } else {
      return `${unit}`;
    }
  }
}
