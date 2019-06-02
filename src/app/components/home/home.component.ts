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

  start() {
    this.isReset = false;
    this.isPaused = false;
  }

  pause() {
    this.isPaused = true;
  }

  reset() {
    this.isReset = true;
    this.isPaused = false;
  }
}
