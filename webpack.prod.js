require('babel-polyfill');
let webpack = require('webpack');
let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var PACKAGE = require('./package.json');
var date = new Date(Date.now()).toLocaleDateString() + ' ' + new Date(Date.now()).toLocaleTimeString();
var banner = 'Name: '+PACKAGE.description+
              '\nURI: '+PACKAGE.uri+
              '\nAuthor: '+PACKAGE.author.name+' - '+PACKAGE.author.description+
              '\nAuthor URI: '+PACKAGE.author.uri+
              '\nVersion: '+PACKAGE.version+
              ' (built on '+date+')';

module.exports = {
  entry: {
    'survey-social-public': ['babel-polyfill','./public/js/survey-social-public.src.js', './public/js/showSurvey-social-public.js', './public/css/survey-social-public.css'],
    'facebook-social-public': ['./public/js/facebook-social-public.src.js']
  },

  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name].min.js'
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
          }
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
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          minimize:true
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
        NODE_ENV: JSON.stringify('production')
        }
       }),
    new UglifyJsPlugin(),
    new webpack.BannerPlugin({
        banner: banner,
        raw: false, // if true, banner will not be wrapped in a comment
        entryOnly: false, // if true, the banner will only be added to the entry chunks
    })
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      'vue-form-wizard$': 'vue-form-wizard/dist/vue-form-wizard.js',
      'vue-form-generator$': 'vue-form-generator/dist/vfg.js',
      'axios$': 'axios/dist/axios.js',
    },
    extensions: ['*', '.js', '.vue', '.json', 'css']
  },
};
