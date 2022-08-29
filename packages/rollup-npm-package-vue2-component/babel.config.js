module.exports = {
  presets: [
    [
      "@babel/preset-env",
      // { // only use in app, not in npmpackage
      //   debug: false,
      //   useBuiltIns: "usage",
      //   corejs: 3
      // }
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    // "@babel/plugin-transform-runtime" // only use in app, not in npmpackage
  ],
};
