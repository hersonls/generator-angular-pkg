export { <%= props.moduleName %>Module } from  './src/<%= props.name %>.module';
<%_ props.initials.forEach((className) => { _%>
export { <%= props.moduleName %><%= className %> } from './src/<%= props.name _%>.<%= className.toLowerCase() _%>';
<%_ }) _%>
