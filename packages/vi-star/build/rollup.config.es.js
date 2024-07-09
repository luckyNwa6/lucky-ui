import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vi-star',
    file: 'dist/vi-star.esm.js',
    format: 'es',
    sourcemap: true
  },
  external: [...base.external]
})

export default config
