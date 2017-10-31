'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const glob = require('glob');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-angular-pkg') + ' generator!'
    ));

    this.initialsChoices = ['Component', 'Directive', 'Pipe', 'Service'];

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Package name?',
      default: this.appname
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Scope name? ( Optional )'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Package description?',
      default: 'Angular package description'
    },
    {
      type: 'confirm',
      name: 'private',
      message: 'Private package?',
      default: false
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author?',
      default: this.user.git.name()
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Package repository?',
      default: 'https://github.com/project/repository'
    },
    {
      type: 'checkbox',
      name: 'initials',
      message: 'What do you need to get started?',
      choices: this.initialsChoices
    }];

    return this.prompt(prompts).then(props => {
      // Generate module name captalized.
      props.moduleName = props.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');

      // Add at ( @ ) in scope value.
      if (props.scope) {
        props.scope = '@' + props.scope;
      }

      for ( let i = 0; i < this.initialsChoices.length; i++ ) {
        if (props.initials.indexOf(this.initialsChoices[i]) !== -1 && this.initialsChoices[i] !== 'Service') {
          props.hasDeclarations = true;
          break;
        }
      }

      this.props = props;
    });
  }

  writing() {
    this.destinationRoot('./pkg/');

    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('spec.bundle.js'),
      this.destinationPath('spec.bundle.js'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('../.gitignore'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('editorconfig'),
      this.destinationPath('../.editorconfig'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('../README.md'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('package_dist.json'),
      this.destinationPath('package_dist.json'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('rollup.config.js'),
      this.destinationPath('rollup.config.js'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath('index.ts'),
      { props: this.props }
    );

    this.fs.copyTpl(
      this.templatePath('travis.yml'),
      this.destinationPath('.travis.yml'),
      { props: this.props }
    );

    this.props.initials.forEach(fileName => {
      fileName = fileName.toLowerCase();

      this.fs.copyTpl(
        this.templatePath('src/' + fileName + '/' + fileName + '.ts'),
        this.destinationPath(('src/' + this.props.name + '.' + fileName + '.ts')),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('src/' + fileName + '/' + fileName + '.spec.ts'),
        this.destinationPath(('src/' + this.props.name + '.' + fileName + '.spec.ts')),
        { props: this.props }
      );
    });

    this.fs.copyTpl(
      this.templatePath('src/module/module.ts'),
      this.destinationPath('src/' + this.props.name + '.module.ts'),
      { props: this.props }
    );
  }

  install() {
    this.yarnInstall();
  }
};
