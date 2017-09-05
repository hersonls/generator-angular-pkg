import { Directive } from '@angular/core';


@Directive({
  selector: '[app<%= props.moduleName %>]'
})
export class <%= props.moduleName %>Directive {

  constructor() { }

}
