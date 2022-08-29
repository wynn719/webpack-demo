const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/entry.esm.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.webpack5.js",
    library: {
      name: "library",
      type: "umd",
    },

    // When targeting a library, especially when libraryTarget is 'umd', this option indicates what global object will be used to mount the library. To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'. Defaults to self for Web-like targets.
    globalObject: 'this',
  },
  target: ['node', 'es5'],
  externals: {
    vue: "Vue",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".ts", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
            options: {
              optimizeSSR: false,
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"), // will set process.env.NODE_ENV to 'production' in code
      "process.env.OUTPUT_FORMAT": JSON.stringify("umd"),
    }),
  ],
};
