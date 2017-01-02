const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../')
      }, {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
        exclude: /\/node_modules\//,
        loader: 'url?name=[path][name].[ext]&limit=4096'
      }, {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
        include: /\/node_modules\//,
        loader: 'file?name=[1]&regExp=node_modules/(.*)'
      }
    ]
  }
};