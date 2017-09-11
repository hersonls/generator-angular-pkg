import { NgModule } from '@angular/core';
<%_ if (props.initials.length) { _%>

<%_ } _%>
<%_ props.initials.forEach((className) => { _%>
import { <%= props.moduleName %><%= className %> } from './<%= props.name _%>.<%= className.toLowerCase() _%>';
<%_ }) _%>


@NgModule({
  <%_ if (props.hasDeclarations) { _%>
  declarations: [
  <%_ } _%>
    <%_ props.initials.forEach((className) => { _%>
      <%_ if (className != 'Service') { _%>
    <%= props.moduleName %><%= className %>,
      <%_ } _%>
    <%_ }) _%>
  <%_ if (props.hasDeclarations) { _%>
  ],
  exports: [
  <%_ } _%>
    <%_ props.initials.forEach((className) => { _%>
      <%_ if (className != 'Service') { _%>
    <%= props.moduleName %><%= className %>,
      <%_ } _%>
    <%_ }) _%>
  <%_ if (props.hasDeclarations) { _%>
  ],
  <%_ } _%>
  <%_ if (props.initials.indexOf('Service') !== -1) { _%>
  providers: [<%= props.moduleName %>Service],
  <%_ } _%>
})
export class <%= props.moduleName _%>Module { }
