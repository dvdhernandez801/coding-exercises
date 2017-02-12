const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        query: {
          presets: [
            ['flow-vue'],
          ],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
  },
};