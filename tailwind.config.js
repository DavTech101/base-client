/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./images/banner.png')",
        story: "url('./images/storyfoto.png')",
      },
      screens: {
        mxl: '1380px',
        // => @media (min-width: 1380px) { ... }
        '3xl': '1600px',
        '4xl': '1800px',
        middle: { min: '1024px', max: '1125px' },
      },
      colors: {
        asr: {
          pink: '#DEB3AD',
          beige: '#D5CAC3',
          'off-black': '#3D3D3D',
          'off-white': '#fffcfa',
          'pink-light': '#E5C1BC',
          'gray-light': '#f4f4f4',
        },
      },
      fontWeight: {
        lightnorm: 375,
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
