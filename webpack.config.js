const path = require('path');

module.exports = {
  entry: './src/components/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    library: 'hedley',
    filename: 'hedley.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
};