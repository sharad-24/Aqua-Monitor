module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'ubuntu': 'Ubuntu, sans-serif',
        },
        height: {
            'custom': '80vh',
            'screen': '100vh',
            'smallScreen': '25vh',
            'auto': 'auto',
            'test': '70vh'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'red': '#C5322A',
            'green': '#5AB963',
            'darkBlue': '#0A0E1A',
            'brown': '#997659',
            'grey': '#E5E5E5',
        }),
        textColor: theme => ({
            ...theme('colors'),
            'green': '#5AB963',
            'darkblue': '#263238',
            'grey': '#808080',
            'lightBlue': '#008891',
            'tip1': "#008891",
            'tip2': "#DCC42A",
            'tip3': "#753422",
            'tip4': "#3E7C17",

        }),
        borderColor: theme => ({
            ...theme('colors'),
            'green': '#5AB963',
                  }),
        extend: {
            margin: {
            'custom': '25%',
            'smm': '50%',
            }},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
