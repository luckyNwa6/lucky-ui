import mouse from './src/mouse'

mouse.install = function (Vue) {
  Vue.component(mouse.name, mouse)
}

export default mouse
