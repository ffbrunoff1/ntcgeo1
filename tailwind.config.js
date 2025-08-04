/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ntc-black': '#333333',
        'ntc-red': '#E30613',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #E30613 0%, #B8050F 50%, #8B040C 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        'gradient-text': 'linear-gradient(135deg, #E30613 0%, #FF4D6D 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
