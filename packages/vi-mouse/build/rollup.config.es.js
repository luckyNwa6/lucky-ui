import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vi-mouse',
    file: 'dist/vi-mouse.esm.js',
    format: 'es',
    sourcemap: true
  },
  external: [...base.external]
})

export default config
