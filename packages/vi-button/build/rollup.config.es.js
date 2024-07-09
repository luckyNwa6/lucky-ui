import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vi-button',
    file: 'dist/vi-button.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external
  ],
})

export default config
