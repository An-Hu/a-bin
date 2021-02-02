module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-use-before-define': 'off',
            },
        },
    ],
};
