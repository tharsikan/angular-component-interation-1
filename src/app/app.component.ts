import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  myVar;
  constructor() {}
  clicked(state) {
    if (state === true)
      this.myVar = setInterval(() => {
        this.count++;
      }, 500);
    if (state === false) clearInterval(this.myVar);
  }
}
