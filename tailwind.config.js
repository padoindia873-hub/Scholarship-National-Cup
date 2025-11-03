/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinkBg: {
          '0%, 100%': {
            background: 'linear-gradient(135deg, #D32F2F, #6A1B9A)',
          },
          '50%': {
            background: 'linear-gradient(135deg, #6A1B9A, #D32F2F)',
          },
        },
        blinkYellow: {
          '0%, 100%': {
            background: 'linear-gradient(to right, #facc15,rgb(11, 210, 245))',
          },
          '50%': {
            background: 'linear-gradient(to right,rgb(11, 210, 245), #facc15)',
          },
        },
        blinkBlue: {
          '0%, 100%': {
            background: 'linear-gradient(to right, #3b82f6,rgb(241, 99, 99))',
          },
          '50%': {
            background: 'linear-gradient(to right,rgb(245, 57, 57), #3b82f6)',
          },
        },
         blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blinkBg: 'blinkBg 1.5s infinite',
        blinkYellow: 'blinkYellow 1.5s infinite',
        blinkBlue: 'blinkBlue 1.5s infinite',
                blink: 'blink 1s infinite',

      },
    },
  },
  plugins: [],
}
