import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() counter: number;
  @Output() countEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public increaseCounter(): void {
    this.counter++;
    this.countEvent.emit(this.counter);
  }

  public decreaseCounter(): void {
    this.counter--;
    this.countEvent.emit(this.counter);
  }
}
