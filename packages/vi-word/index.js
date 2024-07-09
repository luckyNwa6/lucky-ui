import word from './src/word'

word.install = function (Vue) {
  Vue.component(word.name, word)
}

export default word
