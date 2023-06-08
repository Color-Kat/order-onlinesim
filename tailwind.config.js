/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content  : [
        "./index.html",
        "./resources/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme    :
        {
            extend: {
                colors: {
                    'app'       :
                        '#1a1a1d',
                    'app-dark'  :
                        '#0f0f0f',
                    'app-accent':
                        '#ff3442',
                    'app-gray'  :
                        '#777777',
                    'app-light' :
                        '#f1f1f1',
                },
            },
        },
    plugins  : [],
}