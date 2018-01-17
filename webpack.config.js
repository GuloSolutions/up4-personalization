let webpack = require('webpack');
let path = require('path');

module.exports = {

  entry: {
    'survey-social-public': ['./public/js/survey-social-public-v2.js']
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
            plugins: ['transform-runtime'],
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
