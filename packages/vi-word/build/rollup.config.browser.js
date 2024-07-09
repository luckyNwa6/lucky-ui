import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'word',
    file: 'dist/word.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      vue: 'vue'
    }
  }
})

config.plugins.push(terser({}))

export default config
