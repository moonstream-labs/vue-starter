import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  typescript: true,
  type: 'app',
  css: 'prettier',
  markdown: 'prettier',
})
