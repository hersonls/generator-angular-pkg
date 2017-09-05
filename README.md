# Generator Angular Package 

This generator will make a very easy structure to build you own [Angular](https://angular.io/) packages
for distribution.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-package using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g git+https://git@github.com/hersonls/generator-angular-package.git
```

Then generate your new package:

```bash
yo angular-package
```

## Development

### Commands available for package development

Within the package directory there are a number of commands to help you develop and launch a new package. Several gulp tasks are available to manage the package:

```
$ gulp --tasks
├── clean
├── copy-html-css
├── transpile
├── rollup
├── replace-ng-template-styles
├── minify
├── copy-package
└── default
```

- **clean**: Clears the dist directory (packages releases directory).
- **transpile**: Compiles the typescript files for javascript with AoT support.
- **copy-html-css**: Copy the template and css files to directory dist from the package.
- **rollup**: Generates a package bundle using the UMD format.
- **minify**: Compresses the generated bundle through the rollup.
- **replace-ng-template-styles**: Task that corrects a problem with the search of templates with relative path (mandatory in the angular). Make templateUrl replace for template: require ('template.html') and styleUrls for styles: [require ('styles.css')].
- **copy-package**: Copy package_dist.json to directory dist from the package.
- **dev**: Starts a watcher that monitors changes to the code and generates a new test release.
- **build**: Task that is executed when no specific task is passed as parameter. Execute in sequence:
    1. clean
    2. transpile 
    3. copy-html-css
    4. rollup
    5. minify 
    6. replace-ng-template-styles
    7. copy-package

## Testando package

After generating the build with `gulp build` or` gulp dev` you can test the packages locally by making a link through `NPM` or` Yarn`. Both NPM and Yarn have the link and unlink command to make local packages available for local installation.

With the build generated in `.dist / <package-name>` in the root of the repository, you will enter the package directory and execute:

```bash
$ yarn link
```

or 

```bash
$ npm link
```

After successfully generating the link, just go to the project directory and run:

```bash
yarn link <package-name>
```

## Making a distribution

To make a release build for a packag just use ```gulp``` command without parameters.

```bash
cd package-directory
gulp
```

This command will generate a distribution folder of the package inside ```dist``` directory.

## Publishing package

To publish a packge you need go to the package dist path and run ```npm publish``` or ```yarn publish```:

```bash
cd dist/<package-name>
npm publish
```

## License

MIT © [Hersonls](http://github.com/hersonls)
