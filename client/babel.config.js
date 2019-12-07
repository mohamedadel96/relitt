module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ],
  presets: [
    "@vue/cli-plugin-babel/preset"
  ]
};
