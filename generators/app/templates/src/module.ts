import { NgModule } from '@angular/core';

import { <%= props.moduleName %>Component } from './<%= props.name %>.component';
import { <%= props.moduleName %>Directive } from './<%= props.name %>.directive';
import { <%= props.moduleName %>Pipe } from './<%= props.name %>.pipe';
import { <%= props.moduleName %>Service } from './<%= props.name %>.service';


@NgModule({
  declarations: [
    <%= props.moduleName %>Component,
    <%= props.moduleName %>Directive,
    <%= props.moduleName %>Pipe
  ],
  providers: [
    <%= props.moduleName %>Service
  ],
  exports: [
    <%= props.moduleName %>Component,
    <%= props.moduleName %>Directive,
    <%= props.moduleName %>Pipe
  ]
})
export class <%= props.moduleName %>Module { }
