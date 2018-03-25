let webpack = require('webpack');
let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    'survey-social-public': ['./public/js/survey-social-public.src.js', './public/js/showSurvey-social-public.js', './public/css/survey-social-public.css'],
    'facebook-social-public': ['./public/js/facebook-social-public.src.js', './public/css/facebook-social-public.css']
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
    new UglifyJsPlugin()
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
