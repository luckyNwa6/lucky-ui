import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'ViButton',
    file: 'dist/vi-button.umd.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      "vue": "vue"
    }
  },
})

export default config
