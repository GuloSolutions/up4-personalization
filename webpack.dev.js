let webpack = require('webpack');
let path = require('path');
var WebpackAutoInject = require('webpack-auto-inject-version');


module.exports = {

  entry: {
    'survey-social-public': ['./public/js/survey-social-public.src.js', './public/js/showSurvey-social-public.js']
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime'
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {

            'sass': [
              'vue-style-loader',
              'css-loader',
            ],

          },

        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
        NODE_ENV: JSON.stringify('development')
        }
       }),
        new WebpackAutoInject({
        SHORT: 'Name: Facebook Social, URI: https://up4probiotics.com, Author: Gulo - A Digital Agency, Author URI: http://gulo.co',
        SILENT: true,
        PACKAGE_JSON_PATH: './package.json',
        components: {
          AutoIncreaseVersion: true,
          InjectAsComment: true,
          InjectByTag: true
        },
        componentsOptions: {
          AutoIncreaseVersion: {
            runInWatchMode: false // it will increase version with every single build!
          },
          InjectAsComment: {
            tag: 'Version: {version} - {date}',
            dateFormat: 'dddd, mmmm dS, yyyy, h:MM:ss TT' // default
          },
          InjectByTag: {
            fileRegex: /\.+/,
            // regexp to find [AIV] tag inside html, if you tag contains unallowed characters you can adjust the regex
            // but also you can change [AIV] tag to anything you want
            AIVTagRegexp: /(\[AIV])(([a-zA-Z{} ,:;!()_@\-"'\\\/])+)(\[\/AIV])/g,
            dateFormat: 'h:MM:ss TT'
          }
        }
      })
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-form-wizard$': 'vue-form-wizard/dist/vue-form-wizard.js',
      'vue-form-generator$': 'vue-form-generator/dist/vfg.js',
      'axios$': 'axios/dist/axios.js',
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};
