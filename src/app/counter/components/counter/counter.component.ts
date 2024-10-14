import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>{{ counter }}</h2>
  <button (click)="incrementBy(-3)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="decrement()">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;

  public incrementBy(value: number): void {
    this.counter += value;
  }

  public decrement = (): void => {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10
  }

}
