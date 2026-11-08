
module.exports = [
    {
        files: ["**/*.js"],
        ignores: ["node_modules/**"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error"
        },
        languageOptions: {
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly"
            }
        }
    }
];
