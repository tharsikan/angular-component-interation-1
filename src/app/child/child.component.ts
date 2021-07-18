import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html'
})
export class ChildComponent implements OnChanges {
  @Input() count: number;
  nums: number[] = [];
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnChanges() {
    this.nums.push(this.count);
  }
  start() {
    this.change.emit(true);
  }
  stop() {
    this.change.emit(false);
  }
}
