import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
import autoprefixer from 'autoprefixer'

const config = require('../package.json')

export default {
  input: 'index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext', 'main', 'browser'],
      extensions: ['.js', '.vue', '.json']
    }),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    css({
      output: 'dist/index.css'
    }),
    babel({
      presets: ['@vue/babel-preset-jsx'],
      exclude: 'node_modules/**',
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(config.version),
      preventAssignment: true
    }),
  ],
  watch: {
    include: 'src/**',
  },
  external: [
    'vue',
  ],
}
