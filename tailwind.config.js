/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {},

            colors: {
                dark: '#161616',
                gray: '#282828',
                green: '#39b34b',
                offGreen: '#60847c',
                red: '#fc4736',
                yellow: '#db971a',
                offWhite: '#939393',
                white: '#ffffff',
            },

            fontFamily: {
                body: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
