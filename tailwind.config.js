module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit' : ['Outfit'],
      },
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'LG': 'hsl(212, 45%, 89%)',
        'GB': 'hsl(220, 15%, 55%)',
        'DB': 'hsl(218, 44%, 22%)',
        'blu': 'hsl(228, 45%, 44%)',
      },
      screens: {
        'phone': '414px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      fontSize: {
        'watermark': '0.625rem',
      },
    },
  },
  plugins: [],
}
