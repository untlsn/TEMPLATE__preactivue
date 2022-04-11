module.exports = {
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('@windicss/plugin-interaction-variants')],
};
