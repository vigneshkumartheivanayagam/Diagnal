const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                'custom': '36pt'
            }            
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('ps-scrollbar-tailwind'),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '-webkit-scrollbar': {
                    display: 'none'
                },
                '.listli': {
                    marginBottom: '90px',
                    marginLeft: '15px',
                    marginRight: '15px'
                },
                '.contentsection': {
                    paddingTop: '100px',
                    paddingLeft: '15px',
                    paddingRight: '15px'
                },
                '.posterimg': {
                    marginBottom: '24px'
                }
            }
            addUtilities(newUtilities)
        })
    ],
}
