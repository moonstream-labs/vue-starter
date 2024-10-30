import antfu from '@antfu/eslint-config'

export default antfu({
    // Enable stylistic formatting rules
    stylistic: {
        indent: 2,
        quotes: 'single',
        allowIndentationTabs: true,
    },
    // Enable formatters for CSS and Markdown
    formatters: true,

    // Vue and TypeScript are auto-detected, but we can explicitly enable them
    vue: true,
    typescript: true,
})
