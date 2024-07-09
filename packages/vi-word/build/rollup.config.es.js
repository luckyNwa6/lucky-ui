import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vi-word',
    file: 'dist/vi-word.esm.js',
    format: 'es',
    sourcemap: true
  },
  external: [...base.external]
})

export default config
