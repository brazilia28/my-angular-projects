import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-red',
  template: `
    <p>
      red works!
    </p>
  `,
  styles: [`
  :host {
    color: red;
  }
`
  ]
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
