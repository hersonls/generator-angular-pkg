import { NgModule } from '@angular/core';

<%_ props.initials.forEach((className) => { _%>
import { <%= className %> } from './<%= props.name _%>.<%= className.toLowerCase() _%>';
<%_ }) _%>

@NgModule({
  declarations: [
    <%_ props.initials.forEach((className) => { _%>
    <% if (className != 'Service') { %><%= props.moduleName %><%= className %>,<% } %>
    <%_ }) _%>
  ],
  exports: [
    <%_ props.initials.forEach((className) => { _%>
    <% if (className != 'Service') { %><%= props.moduleName %><%= className %>,<% } %>
    <%_ }) _%>
  ],
  <% if (props.initials.indexOf('Service') !== -1) { %>providers: [<%= props.moduleName %>Service],<% } %>
})
export class <%= props.moduleName _%>Module { }
