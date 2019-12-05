module.exports = {
  entry: './assets/javascript/app.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/source/javascripts/'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
}
