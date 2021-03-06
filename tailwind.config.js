module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    }
  },
  // corePlugins: {
  //   preflight: false
  // },
  // important: '#___gatsby',
  variants: {},
  plugins: []
};
