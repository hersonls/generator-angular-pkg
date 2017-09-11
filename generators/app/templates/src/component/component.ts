import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-<%= props.name %>',
  template: `<h1><%= props.name %></h1>`
})
export class <%= props.moduleName %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
