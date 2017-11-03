const webpack = require('webpack');

module.exports = function (config) {
  //
  // For more information about configurations:
  // http://karma-runner.github.io/1.0/config/configuration-file.html
  //
  const configuration = {
    frameworks: ['jasmine'],
    reporters: [
      'progress',
      'kjhtml',
      'coverage-istanbul'
    ],
    browsers: ['Chrome'],
    files: [
      {
        pattern: './spec.bundle.js',
        watched: false
      }
    ],
    client: {
      clearContext: false
    },
    preprocessors: {
      './spec.bundle.js': [
        'webpack',
        'sourcemap'
      ]
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],
    //
    // Plugins settings
    //
    webpack: {
      resolve: {
        extensions: [
          '.ts',
          '.js',
          '.html',
          '.css'
        ]
      },
      module: {
        rules: [
          {
            test: /\.ts/,
            loaders: [
              'ts-loader',
              'angular2-template-loader',
              'source-map-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /src\/.+\.ts$/,
            exclude: /(node_modules|\.spec\.ts$)/,
            loader: 'istanbul-instrumenter-loader',
            enforce: 'post',
            options: {
              esModules: true
            }
          },
          {
            test: /\.(html|css)$/,
            loader: 'raw-loader'
          }
        ],
        exprContextCritical: false
      },
      devtool: 'inline-source-map',
      performance: { hints: false }
    },
    webpackServer: {
      noInfo: true
    },
    coverageIstanbulReporter: {
      reports: [
        'text-summary',
        'html',
        'lcovonly'
      ],
      fixWebpackSourcePaths: true
    }
  };

  config.set(configuration);
}
