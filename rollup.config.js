import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  output: [
    {dir: 'dist/lib', format: 'cjs', exports: 'named'},
    {dir: 'dist/es', format: 'es', exports: 'named'}
  ],
  plugins: [babel({ babelHelpers: 'bundled' })]
};