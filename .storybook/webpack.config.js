const path = require('path');

module.exports = function(storybookBaseConfig, configType) {

  storybookBaseConfig.output.publicPath = '/';

  storybookBaseConfig.module.loaders.push(
    {
      test: /.scss$/,
      loaders: [
        'style',
        'css?sourceMap',
        'resolve-url-loader?sourceMap&keepQuery',
        'sass?sourceMap'
      ],
      include: path.resolve(__dirname, '../')
    }, {
      test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
      exclude: /\/node_modules\//,
      loader: 'url?name=[path][name].[ext]&limit=1'
    }, {
      test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
      include: /\/node_modules\//,
      loader: 'file?name=[1]&regExp=node_modules/(.*)'
    }
  );

  return storybookBaseConfig;
};
