import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-blue',
  template: `
    <p>
      blue works!
    </p>
  `,
  styles: [`
      :host {
        color: blue;
      }
    `
  ]
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
