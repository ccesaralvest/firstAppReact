module.exports = {
  mode: 'none',
  entry: {
    app: './app/App.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/bundle'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
