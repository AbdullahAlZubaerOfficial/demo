const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
};

export default config;
