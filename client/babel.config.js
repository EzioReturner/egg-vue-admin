module.exports = {
  presets: [
    '@vue/app',
    '@vue/babel-preset-jsx',
    ['@babel/preset-env', { modules: false }]
  ],
  plugins: [
    'transform-vue-jsx',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
};
