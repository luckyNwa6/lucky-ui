import clock from './src/clock'

clock.install = function (Vue) {
  Vue.component(clock.name, clock)
}

export default clock
