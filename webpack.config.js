const path = require('path');

module.exports = {
  context : __dirname,
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'app/js'), // string
    filename: 'bundle.js', // string
    publicPath: '/js/', // string
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: ['/node_modules/'],
        enforce: 'pre',
        enforce: 'post',
        loader : 'babel-loader',
        options : {
          presets : ['es2015']
        }
      },
    ],
  },

  devtool: "source-map", // enum
  target: "web" // enum
}
