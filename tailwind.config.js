module.exports = {
  // purgeは実際に使用されるクラスユーティリティのみをビルドする設定で、なるべく軽量化が図れる
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
