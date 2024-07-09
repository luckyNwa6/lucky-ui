import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vi-clock',
    file: 'dist/vi-clock.esm.js',
    format: 'es',
    sourcemap: true
  },
  external: [...base.external]
})

export default config
