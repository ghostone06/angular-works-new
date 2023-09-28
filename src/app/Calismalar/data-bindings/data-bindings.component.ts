import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.scss'],
})
export class DataBindingsComponent implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
