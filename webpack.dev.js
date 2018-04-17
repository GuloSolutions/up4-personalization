let webpack = require('webpack');
let path = require('path');

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
    new webpack.BannerPlugin({
        banner: banner,
        raw: false, // if true, banner will not be wrapped in a comment
        entryOnly: false, // if true, the banner will only be added to the entry chunks
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
