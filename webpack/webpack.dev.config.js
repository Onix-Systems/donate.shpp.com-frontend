const webpack = require('webpack');

module.exports = function (env) {
    const config = require('./webpack.default.config')(env);
    config.devtool = 'eval-source-map';
    return config;
};
