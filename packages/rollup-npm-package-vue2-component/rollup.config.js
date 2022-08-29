import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve"; // Locate modules using the Node resolution algorithm, for using third party modules in node_modules
import replace from "@rollup/plugin-replace"; // Replace strings in files while bundling them. Like Webpack DefinePlugin
import alias from "@rollup/plugin-alias"; // Define aliases when bundling packages with Rollup. (Notice: If using typescript paths, the entries option can be ignored)
import { terser } from "rollup-plugin-terser"; // Rollup plugin to minify generated es bundle. Uses terser under the hood.

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/entry.esm.ts",
    output: {
      format: "esm",
      file: "dist/library.esm.js",
      globals: {
        vue: "Vue",
      },
    },
    external: ["vue"],
    plugins: [
      alias({
        resolve: ['.jsx', '.tsx', '.js', '.ts', '.vue'],
      }),
      replace({
        preventAssignment: true, // required, default value is true for next version
        'process.env.NODE_ENV': JSON.stringify('production'), // will set process.env.NODE_ENV to 'production' in code
        'process.env.OUTPUT_FORMAT': JSON.stringify('esm'),
      }),
      resolve(),
      typescript({
        experimentalDecorators: true,
        module: "es2015",
      }),
      vue(),
      commonjs(),
      babel({ // esm should be babel, because webpack will use esm first
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".jsx", ".es6", ".es", ".mjs", ".vue"],
      }),
    ],
  },

  // UMD build.
  {
    input: "src/entry.ts",
    output: {
      format: "umd",
      file: "dist/library.umd.js",
      globals: {
        vue: "Vue",
      },
      name: "library",
    },
    external: ["vue", /core-js/],
    plugins: [
      alias({
        resolve: ['.jsx', '.tsx', '.js', '.ts', '.vue'],
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.OUTPUT_FORMAT': JSON.stringify('umd'),
      }),
      resolve(),
      typescript({
        experimentalDecorators: true,
        module: "es2015",
      }),
      vue({ template: { optimizeSSR: false } }), // support cjs in node, e.g. nuxtjs ssr
      commonjs(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".jsx", ".es6", ".es", ".mjs", ".vue"],
      }),
    ],
  },

  // SSR build
  // needs to specify 'main' field in package.json
  {
    input: "src/entry.ts",
    output: {
      format: "cjs",
      file: "dist/library.ssr.js",
      exports: 'auto',
    },
    plugins: [
      alias({
        resolve: ['.jsx', '.tsx', '.js', '.ts', '.vue'],
      }),
      replace({
        preventAssignment: true, // required, default value is true for next version
        'process.env.NODE_ENV': JSON.stringify('production'), // will set process.env.NODE_ENV to 'production' in code
        'process.env.OUTPUT_FORMAT': JSON.stringify('cjs'),
      }),
      typescript({
        experimentalDecorators: true,
        module: "es2015",
      }),
      vue({ template: { optimizeSSR: true } }),
      resolve(),
      commonjs(),
      // babel({
      //   babelHelpers: "runtime",
      //   extensions: [".js", ".ts", ".jsx", ".es6", ".es", ".mjs", ".vue"],
      // }),
    ],
  },

  // Browser build. 
  // @deprecated Browser build is so stupid, just use umd
  {
    input: "src/entry.ts",
    output: {
      format: "iife",
      file: "dist/library.min.js",
      name: 'library',
      exports: 'auto',
    },
    plugins: [
      alias({
        resolve: ['.jsx', '.tsx', '.js', '.ts', '.vue'],
      }),
      replace({
        preventAssignment: true, // required, default value is true for next version
        'process.env.NODE_ENV': JSON.stringify('production'), // will set process.env.NODE_ENV to 'production' in code
        'process.env.OUTPUT_FORMAT': JSON.stringify('iife'),
      }),
      typescript({
        experimentalDecorators: true,
        module: "es2015",
      }),
      vue(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".ts", ".jsx", ".es6", ".es", ".mjs", ".vue"],
      }),
      false && terser(),
    ],
  },
];
