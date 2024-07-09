import star from './src/star'

star.install = function (Vue) {
  Vue.component(star.name, star)
}

export default star
