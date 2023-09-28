import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  componentId: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onClicked(componentId: number = 0) {
    this.componentId = componentId;
  }
}
