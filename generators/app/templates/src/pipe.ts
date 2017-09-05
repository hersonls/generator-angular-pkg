import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: '<%= props.name %>'
})
export class <%= props.moduleName %>Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
