var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  devtool: false,
  entry: "./js/client.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins:[
    new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true,  ecma: 8
 })
  ]
};
