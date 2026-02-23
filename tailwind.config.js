export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#1D110D', // keeping legacy var for fallback
                    blue: '#1D5D85',
                    red: '#B82429',
                    orange: '#FE5D34', // Updated to exact Proofers Behance Hex
                    yellow: '#f8b427',
                    dark: '#1D110D',   // Updated to exact Proofers Behance Hex
                    light: '#F5F2F1',
                    cream: '#fdf1c8',
                }
            },
            fontFamily: {
                heading: ['Manrope', 'sans-serif'],
                body: ['Manrope', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
