import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  curSecond: number = 5;
  isPaused: boolean;
  isInterval: number;
  intSecond: number;
  @Output() finish = new EventEmitter();
  public starTime() {
    this.isPaused = false;
    this.isInterval = setInterval( () => {
      if (this.curSecond > 0 ) {
        this.curSecond--;
      } else {
        this.finish.emit();
        this.stopTime();
      }
    }, 1000);
  }
  constructor() { }
  public stopTime() {
    this.isPaused = true;
    clearInterval(this.isInterval);
  }
  public resetTime() {
    this.stopTime();
    this.curSecond = this.intSecond;
  }
  ngOnInit() {
    this.isPaused = true
    this.intSecond = this.curSecond;
  }

}
