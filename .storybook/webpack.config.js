const path = require('path');

module.exports = function(storybookBaseConfig, configType) {

  storybookBaseConfig.output.publicPath = '/';

  storybookBaseConfig.module.rules.push(
    {
      test: /.scss$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'resolve-url-loader?sourceMap&keepQuery',
        'sass-loader?sourceMap'
      ],
      include: path.resolve(__dirname, '../')
    }, {
      test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
      exclude: /\/node_modules\//,
      use: 'url-loader?name=[path][name].[ext]&limit=1'
    }, {
      test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2|ico).*$/,
      include: /\/node_modules\//,
      use: 'file-loader?name=[1]&regExp=node_modules/(.*)'
    }
  );

  return storybookBaseConfig;
};
