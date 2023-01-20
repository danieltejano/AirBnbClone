module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:vue/vue3-essential", "prettier"],
    plugins: ["vue"],
    rules: {
        "prefer-promise-reject-errors": "off",
        "vue/multi-word-component-name": "off",
    }
}