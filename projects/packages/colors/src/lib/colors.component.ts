import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-colors',
  template: `
    <lib-blue></lib-blue>
    <lib-red></lib-red>
  `,
  styles: [
  ]
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
