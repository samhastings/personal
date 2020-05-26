module.exports = {
    purge: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    theme: {
        fontFamily: {
            'body': ['IBM Plex Sans', 'sans-serif'],
        },
    },
    variants: {
        textColor: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
    plugins: [],
};
