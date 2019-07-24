const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;

const publicPathMapping = {
  prod: 'https://xxx.luckincoffee.com/'
};

module.exports = {
  configureWebpack: config => {
    Object.assign(config, {
      entry: {
        app: './src/main.js'
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          '@components': path.resolve(__dirname, './src/components'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@views': path.resolve(__dirname, './src/views'),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@config': path.resolve(__dirname, './config'),
          '@model': path.resolve(__dirname, './src/model')
        },
        extensions: [...config.resolve.extensions, '.ts', '.tsx', '.js']
      },
      plugins: [
        ...config.plugins,
        new webpack.ProvidePlugin({
          _: 'lodash'
        })
      ]
    });
  },
  css: {
    loaderOptions: {
      less: {
        // 配置主题色入口
        javascriptEnabled: true
      }
    }
  },
  outputDir: path.resolve(__dirname, '../app/public/'),
  publicPath: './', //ENV === 'dev' ? 'http://localhost:9527/' : publicPathMapping[ENV],
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 9527,
    https: false
  }
};
